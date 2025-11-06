import { NextResponse } from 'next/server';
import { Pool } from 'pg';
import bcrypt from 'bcryptjs';
import { z } from 'zod';

// Configurer la connexion à la base de données
const pool = new Pool({
    connectionString: process.env.POSTGRES_URL,
});

// Définir le schéma de validation avec Zod
const userSchema = z.object({
    fullName: z.string().min(3, { message: "Le nom doit contenir au moins 3 caractères." }),
    email: z.string().email({ message: "Adresse email invalide." }),
    password: z.string().min(8, { message: "Le mot de passe doit contenir au moins 8 caractères." }),
});

export async function POST(request) {
    try {
        const body = await request.json();

        // 1. Valider les données d'entrée
        const validation = userSchema.safeParse({
            fullName: body.fullName,
            email: body.email,
            password: body.password,
        });

        if (!validation.success) {
            return NextResponse.json({ errors: validation.error.flatten().fieldErrors }, { status: 400 });
        }

        const { fullName, email, password } = validation.data;

        const client = await pool.connect();
        try {
            // 2. Vérifier si l'utilisateur existe déjà
            const existingUser = await client.query('SELECT * FROM users WHERE email = $1', [email]);
            if (existingUser.rows.length > 0) {
                return NextResponse.json({ message: 'Un utilisateur avec cet email existe déjà.' }, { status: 409 });
            }

            // 3. Hasher le mot de passe
            const passwordHash = await bcrypt.hash(password, 10); // 10 est le "salt round"

            // 4. Insérer le nouvel utilisateur dans la base de données
            const newUser = await client.query(
                'INSERT INTO users (full_name, email, password_hash) VALUES ($1, $2, $3) RETURNING id, full_name, email',
                [fullName, email, passwordHash]
            );

            return NextResponse.json(newUser.rows[0], { status: 201 });

        } finally {
            client.release(); // Libérer le client de base de données
        }

    } catch (error) {
        console.error('Erreur API Inscription:', error);
        return NextResponse.json({ message: 'Erreur interne du serveur.' }, { status: 500 });
    }
}