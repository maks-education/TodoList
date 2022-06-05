const { exec } = require('child_process');

function build(callback) {
    let child = exec('npm install forever -g && cd ./server && npm i && npm run prod' , (error) => {
        if (error) {
            console.error(error)
        } else {
            console.log('Server built successful')
            let child2 = exec('cd ./client && npm i && npm run build && cd .. && node ./delete_dist.js && node ./copyDist.js', () => {
                if (error) {
                    console.error(error)
                } else {
                    console.log('Client built successful')
                    callback()
                }
            })
            child2.stdout.pipe(process.stdout);
            child2.stderr.pipe(process.stderr);
        }
    });
    child.stdout.pipe(process.stdout);
    child.stderr.pipe(process.stderr);
}



build(function () {
    console.log('Build successful, application started')
})
