import express from 'express';
import Users from '../models/users';
import bcrypt from 'bcrypt';

const router = express.Router();

router.post('/', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    function incorrectResponse(res) {
        res.status(400).json({
            message: 'Incorrect username or password',
        });
    }
    Users.getByUsername(username)
        .then((user) => {
            const valid = user && bcrypt.compareSync(password, user.password);
            if (valid) {
                req.session.user_id = user.id;
                req.session.username = user.username;
                res.json({
                    userId: user.id,
                    username: username,
                });
            } else {
                incorrectResponse(res);
            }
        })
        .catch((error) => {
            incorrectResponse(res);
        });
});

router.get('/', (req, res) => {
    if (req.session.username) {
        res.json({
            userId: req.session.user_id,
            username: req.session.username,
        });
    } else {
        res.status(401).json({
            message: 'Not logged in',
        });
    }
});

router.delete('/', (req, res) => {
    req.session.destroy(() => {
        res.json({ message: 'Logged out' });
    });
});

export default router;
