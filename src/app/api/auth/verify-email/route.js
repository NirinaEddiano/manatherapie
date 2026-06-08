import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

export async function POST(request) {
    const ip = getClientIp(request);
    const rl = rateLimit({ key: `verify-email:${ip}`, max: 10, windowMs: 60 * 60 * 1000 });
    if (!rl.success) {
        return NextResponse.json({ message: 'Trop de tentatives. Réessayez dans une heure.' }, { status: 429 });
    }

    try {
        const { email, code } = await request.json();

        if (!email || !code) {
            return NextResponse.json({ message: 'Email et code requis.' }, { status: 400 });
        }

        const client = await pool.connect();
        try {
            const result = await client.query(
                'SELECT id, verification_code, verification_code_expires, email_verified FROM users WHERE email = $1',
                [email]
            );

            if (result.rows.length === 0) {
                return NextResponse.json({ message: 'Compte introuvable.' }, { status: 404 });
            }

            const user = result.rows[0];

            if (user.email_verified) {
                return NextResponse.json({ message: 'Email déjà vérifié.' }, { status: 200 });
            }

            if (user.verification_code !== code.trim()) {
                return NextResponse.json({ message: 'Code incorrect.' }, { status: 400 });
            }

            if (new Date() > new Date(user.verification_code_expires)) {
                return NextResponse.json({ message: 'Code expiré. Demandez un nouveau code.' }, { status: 400 });
            }

            await client.query(
                'UPDATE users SET email_verified = TRUE, verification_code = NULL, verification_code_expires = NULL WHERE email = $1',
                [email]
            );

            return NextResponse.json({ message: 'Email vérifié avec succès.' }, { status: 200 });

        } finally {
            client.release();
        }
    } catch (error) {
        console.error('Erreur API verify-email:', error);
        return NextResponse.json({ message: 'Erreur interne du serveur.' }, { status: 500 });
    }
}
