const { exec } = require('child_process');
const fs  = require('fs')
const path = require('path')

let child1 = exec('cd ./client && npm i && npm run build' , (error) => {
if (error) {
    console.error(error)
}
    fs.renameSync(path.join(__dirname, './client/dist'), path.join(__dirname, './server/dist'));

    let child2 = exec('cd ./server && npm i && npm run prod' , () => {  
})
child2.stdout.pipe(process.stdout)
})

child1.stdout.pipe(process.stdout) 



