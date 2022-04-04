const { exec } = require('child_process');
console.log(process.env.PORT)
let child1 = exec('cd ./client && npm i && npm run build && cd .. && node ./copyDist.js && cd ./server && npm i && npm run prod' , (error) => {
if (error) {
    console.error(error)
}
})

child1.stdout.pipe(process.stdout) 



