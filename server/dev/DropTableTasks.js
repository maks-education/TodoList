function DropTableTasks() {
    return client.query('DROP TABLE IF EXISTS tasks', (err, res) => {
      if (err){
        console.log('DROP TABLIE IF EXISTS tasks not successffully')
      }else {
        console.log('DROP TABLIE IF EXISTS tasks successffully')
      }
    }) 
}
module.exports.DropTableTasks = DropTableTasks
    