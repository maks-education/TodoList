function DropTableTasks() {
    return client.query('DROP TABLE IF EXISTS tasks', (err, res) => {
      if (err){
        console.log('DROP TABLIE IF EXISTS tasks not completed')
      }else {
        console.log('DROP TABLIE IF EXISTS tasks completed')
      }
    }) 
}
module.exports.DropTableTasks = DropTableTasks
    