
const fs  = require('fs')
const path = require('path')


    fs.renameSync(path.join(__dirname, './client/dist'), path.join(__dirname, './server/dist'));


