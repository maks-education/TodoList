const { exec } = require('child_process');
const fs  = require('fs')

let child1 = exec('cd ./client && npm i && npm run build' , () => {
    fs.renameSync('./client/dist', './server/dist');

    let child2 = exec('cd ./server && npm i && npm run prod' , () => {  
})
child2.stdout.pipe(process.stdout)
})

child1.stdout.pipe(process.stdout) 
