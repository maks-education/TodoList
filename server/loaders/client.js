import Sequelize from "sequelize";

let sequelize;

export function createDBClient() {
    sequelize = new Sequelize(
        process.env.DATABASE_URL
            ? `postgres://${process.env.DATABASE_URL}`
            : {
                dialect: 'postgres',
                username: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PSW,
                port: process.env.DB_PORT
            }
    );
    return sequelize;
}

export {
    sequelize
}
