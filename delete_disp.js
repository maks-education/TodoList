const fs  = require('fs')
const dist = "./server/dist"

fs.rmdirSync(dist, { recursive: true })
