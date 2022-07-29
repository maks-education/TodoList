import { createHmac } from 'crypto';

export function crypto(password) {
const secret = 'qweqwe'

    return hash = createHmac('sha256', secret)
               .update(password)
               .digest('hex');
}

