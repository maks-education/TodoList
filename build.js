const { exec } = require('child_process');

let child1 = exec('cd ./server && npm i run prod && npm run prod' , () => {
    })
child1.stdout.pipe(process.stdout)