import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { sendVerificationEmail } from '@/lib/mail';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

function generateCode() {
    return Math.floor(100000 + Math.random() * 900000).toString();
}

export async function POST(request) {
    const ip = getClientIp(request);
    const rl = rateLimit({ key: `resend-verification:${ip}`, max: 3, windowMs: 60 * 60 * 1000 });
    if (!rl.success) {
        return NextResponse.json({ message: 'Trop de demandes. Réessayez dans une heure.' }, { status: 429 });
    }

    try {
        const { email } = await request.json();

        if (!email) {
            return NextResponse.json({ message: 'Email requis.' }, { status: 400 });
        }

        const client = await pool.connect();
        try {
            const result = await client.query(
                'SELECT id, email_verified FROM users WHERE email = $1',
                [email]
            );

            if (result.rows.length === 0) {
                return NextResponse.json({ message: 'Compte introuvable.' }, { status: 404 });
            }

            if (result.rows[0].email_verified) {
                return NextResponse.json({ message: 'Email déjà vérifié.' }, { status: 200 });
            }

            const code = generateCode();
            const codeExpiry = new Date(Date.now() + 15 * 60 * 1000);

            await client.query(
                'UPDATE users SET verification_code = $1, verification_code_expires = $2 WHERE email = $3',
                [code, codeExpiry, email]
            );

            await sendVerificationEmail({ to: email, code });

            return NextResponse.json({ message: 'Nouveau code envoyé.' }, { status: 200 });

        } finally {
            client.release();
        }
    } catch (error) {
        console.error('Erreur API resend-verification:', error);
        return NextResponse.json({ message: 'Erreur interne du serveur.' }, { status: 500 });
    }
}
