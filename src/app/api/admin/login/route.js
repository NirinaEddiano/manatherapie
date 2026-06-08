import { NextResponse } from 'next/server';
import pool from '@/lib/db';
import bcrypt from 'bcryptjs';
import { SignJWT } from 'jose';

const ADMIN_JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function POST(request) {
    try {
        const { email, password } = await request.json();

        if (!email || !password) {
            return NextResponse.json({ message: 'Email et mot de passe requis.' }, { status: 400 });
        }

        const client = await pool.connect();
        try {
            const result = await client.query('SELECT id, name, email, password_hash, role FROM users WHERE email = $1', [email]);
            const user = result.rows[0];

            if (!user) {
                return NextResponse.json({ message: 'Identifiants invalides.' }, { status: 401 });
            }

            if (user.role !== 'ADMIN') {
                console.warn(`Tentative de connexion admin par un non-admin: ${email}`);
                return NextResponse.json({ message: 'Accès non autorisé.' }, { status: 403 });
            }

            const isPasswordValid = await bcrypt.compare(password, user.password_hash);
            if (!isPasswordValid) {
                return NextResponse.json({ message: 'Identifiants invalides.' }, { status: 401 });
            }

            const token = await new SignJWT({ userId: user.id, role: user.role })
                .setProtectedHeader({ alg: 'HS256' })
                .setIssuedAt()
                .setExpirationTime('1h')
                .sign(ADMIN_JWT_SECRET);

            const response = NextResponse.json({ message: 'Connexion réussie.' });
            response.cookies.set('admin-token', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60,
                path: '/',
                sameSite: 'lax',
            });

            return response;

        } finally {
            client.release();
        }

    } catch (error) {
        console.error('Erreur API Admin Login:', error);
        return NextResponse.json({ message: 'Erreur interne du serveur.' }, { status: 500 });
    }
}
