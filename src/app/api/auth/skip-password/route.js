import { NextResponse } from 'next/server';
import { getServerSession } from 'next-auth';
import { authOptions } from '@/lib/auth';
import { rateLimit, getClientIp } from '@/lib/rateLimit';

export async function POST(request) {
    const ip = getClientIp(request);
    const rl = rateLimit({ key: `skip-password:${ip}`, max: 10, windowMs: 60 * 1000 });
    if (!rl.success) {
        return NextResponse.json({ message: 'Trop de tentatives. Réessayez plus tard.' }, { status: 429 });
    }

    const session = await getServerSession(authOptions);
    if (!session?.user?.id) {
        return NextResponse.json({ message: 'Non autorisé.' }, { status: 401 });
    }

    return NextResponse.json({ message: 'OK' }, { status: 200 });
}
