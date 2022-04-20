const { createHmac } = require ('crypto');

function crypto(password) {
const secret = 'qweqwe'
    return hash = createHmac('sha256', secret)
               .update(password)
               .digest('hex');
}
module.exports.crypto = crypto