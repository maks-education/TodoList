

function createTable(callback) {
    client.query('CREATE TABLE tasks(id INTEGER, title VARCHAR, DateOpen )', (err, res) => {
        if (err) {
            console.log(err)
        } else {
            console.log("users the table was created successfully")
            if (callback){
            callback()
            }
        }
    }) 
   }
