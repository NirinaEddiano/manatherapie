import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

export async function POST(request) {
    const ip = getClientIp(request);
    const rl = rateLimit({ key: `set-password:${ip}`, max: 5, windowMs: 15 * 60 * 1000 });
    if (!rl.success) {
        return NextResponse.json({ message: 'Trop de tentatives. Réessayez dans quelques minutes.' }, { status: 429 });
    }

    const session = await getServerSession(authOptions);
    if (!session?.user?.email) {
        return NextResponse.json({ message: 'Non autorisé.' }, { status: 401 });
    }

    const { password } = await request.json();

    if (!password || password.length < 8) {
        return NextResponse.json({ message: 'Le mot de passe doit contenir au moins 8 caractères.' }, { status: 400 });
    }

    const client = await pool.connect();
    try {
        const existing = await client.query('SELECT password_hash FROM users WHERE email = $1', [session.user.email]);
        if (existing.rows[0]?.password_hash) {
            return NextResponse.json({ message: 'Un mot de passe est déjà défini. Utilisez "Changer le mot de passe".' }, { status: 409 });
        }

        const passwordHash = await bcrypt.hash(password, 10);
        await client.query(
            'UPDATE users SET password_hash = $1 WHERE email = $2',
            [passwordHash, session.user.email]
        );
        return NextResponse.json({ message: 'Mot de passe défini avec succès.' }, { status: 200 });
    } catch (error) {
        console.error('Erreur API set-password:', error);
        return NextResponse.json({ message: 'Erreur interne du serveur.' }, { status: 500 });
    } finally {
        client.release();
    }
}
