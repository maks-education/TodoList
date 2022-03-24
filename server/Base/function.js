const fs = require('fs')

function getSQLfromFile(path) {
    return fs.readFileSync(path.join(__dirname, path)).toString()
}