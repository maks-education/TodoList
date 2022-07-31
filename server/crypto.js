import { createHmac } from 'crypto';

export function crypto(password) {
    const secret = 'qweqwe'
    const hash = createHmac('sha256', secret)
        .update(password)
        .digest('hex');

    return hash
}

