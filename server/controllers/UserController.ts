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
//

router.post('/api/users', (req, res, next) => {
    const userLoginObj = {
        username: req.body.username,
        password: req.body.password,
    };

    Users.getByUsernamePassword(userLoginObj)
        .then(({ password, ...user }: any) => {
            if (!user) {
                return res.status(500).json({
                    message: 'This User does not exist.',
                });
            }
            return res.json(user);
        })
        .catch((error: any) => {
            next(error);
        });
});

//
router.post('/', (req, res, next) => {
    const userObj = {
        username: req.body.username,
        email: req.body.email,
        password: bcrypt.hashSync(req.body.password, bcrypt.genSaltSync()),
    };

    router.delete('/:id', (req, res) => {
        Users.delete(req.params.id).then((users: any) => {
            res.json({ status: 'tune you later' });
        });
    });

    Users.create(userObj)
        .then(({ password, ...user }: any) => {
            if (!user) {
                return res.status(500).json({
                    message:
                        'Something went wrong creating the user. Please try again.',
                });
            }
            return res.json(user);
        })
        .catch((error: any) => {
            next(error);
        });
});

export default router;
