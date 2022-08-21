import Sequelize from "sequelize";

let sequelize;

export function createDBClient() {
    sequelize = process.env.DATABASE_URL
        ? new Sequelize(
            process.env.DATABASE_URL,
            {
                dialectOptions: {
                    ssl: {
                        rejectUnauthorized: false
                    }
                }
            })
        : new Sequelize({
            dialect: 'postgres',
            username: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_NAME,
            password: process.env.DB_PSW,
            port: process.env.DB_PORT
        });

    return sequelize;
}

export {
    sequelize
}
