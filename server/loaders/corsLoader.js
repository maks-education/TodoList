let cors = require('cors')

export function corsLoader(app) {
    if (process.env.NODE_ENV === 'development'){
        app.use(cors())
    }
} 
