import pkg from 'pg';
const {Client} = pkg;
import dotenv from 'dotenv'
dotenv.config()

export const client = new Client(
    process.env.DATABASE_URL
        ? {
            connectionString: process.env.DATABASE_URL,
            ssl: {
                rejectUnauthorized: false
            }
        }
        : {
            user: 'postgres',
            host: 'localhost',
            database: 'Todo_List',
            password: '1973',
            port: '5432'
        }
);

