import { jwtVerify } from 'jose';
import { cookies } from 'next/headers';

const ADMIN_JWT_SECRET = new TextEncoder().encode(process.env.JWT_SECRET);

export async function verifyAdmin() {
    const cookieStore = await cookies();
    const tokenValue = cookieStore.get('admin-token')?.value;
    if (!tokenValue) return null;

    try {
        const { payload } = await jwtVerify(tokenValue, ADMIN_JWT_SECRET);
        if (payload.role !== 'ADMIN') return null;
        return payload;
    } catch {
        return null;
    }
}
