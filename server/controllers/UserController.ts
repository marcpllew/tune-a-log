import express from 'express';
import Users from '../models/users';

import bcrypt from 'bcrypt';

const router = express.Router();

router.get('/', (req, res) => {
    Users.getAll().then((users: any) => {
        res.json(users);
    });
});

router.get('/:id', (req, res) => {
    Users.getById(req.params.id).then((user: any) => {
        res.json(user);
    });
});

router.post('/register', (req, res, next) => {
    const username = req.body.username;
    const email = req.body.email;
    const password = req.body.password;
    // const user = req.body;
    username.password = bcrypt.hashSync(
        username.password,
        bcrypt.genSaltSync()
    );

    Users.create(username)
        .then((user: any) => {
            if (!user) {
                return res.status(500).json({
                    message:
                        'Something went wrong creating the user. Please try again.',
                });
            }
            // const username = req.body.username;
            // const email = req.body.email;
            // const password = req.body.password;

            return res.json(user);
        })
        .catch((error: any) => {
            next(error);
        });
});

export default router;
