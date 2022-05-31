import express from 'express';
import Music from '../models/music';
import isLoggedIn from '../controllers/isLoggedIn';

const router = express.Router();

router.get('/', isLoggedIn, (req, res) => {
    Music.getAll(req.query?.style || null, req.query?.artist_name || null).then(
        (music: any) => {
            res.json(music);
        }
    );
});

router.get('/artist_name/:artist_name', isLoggedIn, (req, res) => {
    Music.getByArtistName(req.params.artist_name).then((music: any) => {
        res.json(music);
    });
});

router.get('/style/:style', isLoggedIn, (req, res) => {
    Music.getByStyle(req.params.style).then((music: any) => {
        res.json(music);
    });
});

router.get('/:id', isLoggedIn, (req, res) => {
    // creaye a new file to put this function in and import afer every route

    Music.getById(req.params.id).then((music: any) => {
        res.json(music);
    });
});

router.post('/', isLoggedIn, (req, res) => {
    Music.create(req.body).then((music: any) => {
        res.json(music);
    });
});

router.delete('/:id', isLoggedIn, (req, res) => {
    Music.delete(req.params.id).then((music: any) => {
        res.json({ status: 'tune you later' });
    });
});

export default router;
