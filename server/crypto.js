const { createHmac } = require ('crypto');

function crypto(password) {
const secret = process.env.USER_PASSWORD_SECRET
    return hash = createHmac('sha256', secret)
               .update(password)
               .digest('hex');
}
module.exports.crypto = crypto
