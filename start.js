const { exec } = require('child_process');

function build(callback) {
    let child = exec('cd ./server && npm run prod' , (error) => {
        if (error) {
            console.error(error)
        }
        callback()
    })
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}



build(function () {
    console.log('Build successful')
})
