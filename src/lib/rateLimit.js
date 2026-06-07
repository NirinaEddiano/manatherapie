const buckets = new Map();

export function rateLimit({ key, max, windowMs }) {
    const now = Date.now();
    const bucket = buckets.get(key) || { count: 0, resetAt: now + windowMs };

    if (now > bucket.resetAt) {
        bucket.count = 0;
        bucket.resetAt = now + windowMs;
    }

    bucket.count += 1;
    buckets.set(key, bucket);

    const remaining = Math.max(0, max - bucket.count);
    const resetSeconds = Math.ceil((bucket.resetAt - now) / 1000);

    return {
        success: bucket.count <= max,
        remaining,
        resetSeconds,
    };
}

export function getClientIp(request) {
    const forwarded = request.headers.get('x-forwarded-for');
    if (forwarded) return forwarded.split(',')[0].trim();
    const real = request.headers.get('x-real-ip');
    if (real) return real;
    return 'unknown';
}

setInterval(() => {
    const now = Date.now();
    for (const [key, bucket] of buckets.entries()) {
        if (now > bucket.resetAt) {
            buckets.delete(key);
        }
    }
}, 5 * 60 * 1000).unref();
