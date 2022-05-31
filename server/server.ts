if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

import express, { Request, Response } from 'express';
import path from 'path';
import db from './database/db';
import Music from './controllers/MusicController';
import Users from './controllers/UserController';
import LoginController from './controllers/LoginController';
import expressSession from 'express-session';
import connectPgSession from 'connect-pg-simple';
const pgSession = connectPgSession(expressSession);

const PORT =
    process.env.PORT || (process.env.NODE_ENV === 'production' && 3000) || 3001;
const app = express();

app.use(
    expressSession({
        store: new pgSession({
            pool: db,
            createTableIfMissing: true,
        }),
        secret: process.env.SESSION_SECRET,
        resave: false,
        saveUninitialized: false,
    })
);

declare module 'express-session' {
    interface SessionData {
        user_id: string;
        username: string;
    }
}

app.set('trust proxy', 1);
app.use(express.json()); // support json encoded bodies

app.use('/api/music', Music);
app.use('/api/users', Users);
app.use('/api/sessions', LoginController);

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '..', 'client', 'build')));

    app.get('/*', (req, res) => {
        res.sendFile(
            path.join(__dirname, '..', 'client', 'build', 'index.html')
        );
    });
}

app.listen(+PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
