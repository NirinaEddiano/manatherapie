import { NextResponse } from 'next/server';
import pool from '@/lib/db';

export async function GET() {
    // Cette route n'a pas besoin d'être protégée, car la liste des services est publique.
    const client = await pool.connect();
    try {
        const result = await client.query('SELECT slug, title, price, acompte, type FROM services ORDER BY title');
        return NextResponse.json(result.rows);
    } catch (error) {
        console.error("Erreur API /api/services:", error);
        return NextResponse.json({ message: "Erreur interne du serveur." }, { status: 500 });
    } finally {
        client.release();
    }
}