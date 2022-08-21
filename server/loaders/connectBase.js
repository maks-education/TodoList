import {createDBClient} from "./client.js";

export async function connectionBase() {
  const sequelize = createDBClient()
  try {
    await sequelize.authenticate()
    console.log('Database connected')
  } catch (err) {
    console.log('Database connection error')
    console.log(err)
  }

  return sequelize
}

