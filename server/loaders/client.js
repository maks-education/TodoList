import pg from 'pg';
const { Client } = pg;

let client;

export function createDBClient() {
    client = new Client(
        process.env.DATABASE_URL
            ? {
                connectionString: process.env.DATABASE_URL,
                ssl: {
                    rejectUnauthorized: false
                }
            }
            : {
                user: process.env.DB_USER,
                host: process.env.DB_HOST,
                database: process.env.DB_NAME,
                password: process.env.DB_PSW,
                port: process.env.DB_PORT
            }
    );
    return client;
}

export {
    client
}
