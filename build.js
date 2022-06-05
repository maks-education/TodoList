const { exec } = require('child_process');
console.log(process.env)
function build(callback) {
    let child1 = exec('cd ./client && npm i && npm run build && cd .. && node ./delete_dist.js && node ./copyDist.js && cd ./server && npm i && npm run prod' , (error) => {
        if (error) {
            console.error(error)
        }
        callback()
    })
    process.stdout.pipe(child1.stdout)
}



build(function () {
    console.log('Build successful, application started')
})

