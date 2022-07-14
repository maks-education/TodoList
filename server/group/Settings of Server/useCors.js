const cors = require('cors')

function useCors(app) {
    if (process.env.NODE_ENV === 'development'){
    app.use(cors())
    }
}
module.exports.useCors = useCors
