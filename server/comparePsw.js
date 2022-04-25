const { crypto } = require('./crypto')


function comparePsw (clientPsw, serverPsw) {
    return clientPsw && crypto(clientPsw) === serverPsw 
     
} 
module.exports.comparePsw = comparePsw