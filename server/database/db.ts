import pg from 'pg';

let db: any;
if (process.env.NODE_ENV === 'production') {
    db = new pg.Pool({
        connectionString: process.env.DATABASE_URL,
        ssl: {
            rejectUnauthorized: false,
        },
    });
} else {
    db = new pg.Pool({
        database: 'music_app',
    });
}

export default db

