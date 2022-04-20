const { crypto } = require('./crypto')


function comparePsw (clientPsw, serverPsw) {
    console.log(crypto(clientPsw))
     console.log(serverPsw)

    return crypto(clientPsw) === serverPsw 
     
} 
module.exports.comparePsw = comparePsw