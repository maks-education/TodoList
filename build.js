const { exec } = require('child_process');

function build(callback) {
    let child = exec('cd ./client && npm i && npm run build && cd .. && node ./delete_dist.js && node ./copyDist.js && cd ./server && npm i && npm run prod' , (error) => {
        if (error) {
            console.error(error)
        }
        callback()
    })
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}



build(function () {
    console.log('Build successful, application started')
})
let a = 0
let int = setInterval(() => {
    if (a < 100) {
        a++
        console.log(a)
    } else {
        clearInterval(int)
    }
}, 1000)
