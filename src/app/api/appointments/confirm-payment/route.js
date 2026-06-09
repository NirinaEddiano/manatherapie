import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { getServerSession } from "next-auth/next";
import { authOptions } from "@/lib/auth";
import { sendAppointmentConfirmationEmail, sendAdminNewAppointmentEmail } from '@/lib/mail';
import Stripe from 'stripe';

const stripe = process.env.STRIPE_SECRET_KEY
  ? new Stripe(process.env.STRIPE_SECRET_KEY)
  : null;

export async function POST(request) {
    const authSession = await getServerSession(authOptions);
    if (!authSession?.user?.id) {
        return NextResponse.json({ message: "Non autorisé" }, { status: 401 });
    }
    const userId = authSession.user.id;

    const { sessionId } = await request.json();
    if (!sessionId) {
        return NextResponse.json({ message: "Session Stripe manquante." }, { status: 400 });
    }

    if (!stripe) {
        return NextResponse.json({ message: "Stripe non configuré." }, { status: 500 });
    }

    let appointmentId, clientEmail, paymentIntentId, amount;
    try {
        const stripeSession = await stripe.checkout.sessions.retrieve(sessionId);
        if (stripeSession.payment_status !== 'paid') {
            return NextResponse.json({ message: "Paiement non confirmé." }, { status: 402 });
        }
        appointmentId = stripeSession.metadata?.appointmentId;
        if (!appointmentId) {
            return NextResponse.json({ message: "Session invalide." }, { status: 400 });
        }
        clientEmail = stripeSession.customer_email || authSession.user.email;
        paymentIntentId = stripeSession.payment_intent;
        amount = stripeSession.amount_total / 100;
    } catch (err) {
        console.error("Erreur vérification Stripe:", err);
        return NextResponse.json({ message: "Impossible de vérifier le paiement." }, { status: 500 });
    }

    const client = await pool.connect();
    try {
        await client.query('BEGIN');

        const result = await client.query(`
            UPDATE appointments 
            SET status = 'confirmé' 
            WHERE id = $1 AND "userId" = $2 AND status = 'en attente'
            RETURNING id, "serviceId", start_time
        `, [appointmentId, userId]);

        if (result.rows.length === 0) {
            await client.query('ROLLBACK');
            return NextResponse.json({ message: "Rendez-vous déjà confirmé ou introuvable." }, { status: 404 });
        }

        const { serviceId, start_time } = result.rows[0];

        const serviceRes = await client.query('SELECT title FROM services WHERE id = $1', [serviceId]);
        const serviceTitle = serviceRes.rows[0]?.title || 'Service';

        const clientMsg = `Votre rendez-vous pour "${serviceTitle}" du ${new Date(start_time).toLocaleDateString('fr-FR')} est confirmé.`;
        await client.query(
            'INSERT INTO notifications ("userId", message, link) VALUES ($1, $2, $3)',
            [userId, clientMsg, '/compte/rendez-vous']
        );

        const adminMsg = `Nouveau rendez-vous confirmé : "${serviceTitle}" le ${new Date(start_time).toLocaleDateString('fr-FR')}.`;
        const adminRes = await client.query('SELECT id FROM users WHERE role = $1', ['ADMIN']);
        for (const admin of adminRes.rows) {
            await client.query(
                'INSERT INTO notifications ("userId", message, link) VALUES ($1, $2, $3)',
                [admin.id, adminMsg, '/admin/rendez-vous']
            );
        }

        if (paymentIntentId) {
            await client.query(
                'INSERT INTO payments ("appointmentId", stripe_payment_intent_id, amount, status) VALUES ($1, $2, $3, $4)',
                [appointmentId, paymentIntentId, amount, 'succeeded']
            );
        }

        await client.query('COMMIT');

        const userRes = await client.query('SELECT email, name FROM users WHERE id = $1', [userId]);
        if (userRes.rows.length > 0) {
            await sendAppointmentConfirmationEmail({
                to: userRes.rows[0].email,
                serviceTitle,
                appointmentDate: start_time,
            });
        }

        const adminEmailRes = await client.query('SELECT email FROM users WHERE role = $1', ['ADMIN']);
        const clientName = userRes.rows[0]?.name || 'Client';
        for (const admin of adminEmailRes.rows) {
            await sendAdminNewAppointmentEmail({
                to: admin.email,
                clientName,
                clientEmail,
                serviceTitle,
                appointmentDate: start_time,
            });
        }

        return NextResponse.json({ confirmed: true });
    } catch (error) {
        await client.query('ROLLBACK');
        console.error("Erreur API confirm-payment:", error);
        return NextResponse.json({ message: "Erreur interne du serveur." }, { status: 500 });
    } finally {
        client.release();
    }
}
