
import express from 'express';
import Music from '../models/music';


const router = express.Router();

router.get('/', (req, res) => {
    Music.getAll(req.query?.search || '').then((music: any) => {
        res.json(music);
    });
});

// router.get('/:style', (req, res) => {
//     Music.getByStyle(req.params.style).then((music: any) => {
//         res.json(music);
//     });
// });

router.get('/:id', (req, res) => {
    Music.getById(req.params.id).then((music: any) => {
        res.json(music);
    });
});

router.post('/', (req, res) => {
    Music.create(req.body).then((music: any) => {
        res.json(music);
    });
});

router.delete('/:id', (req, res) => {
    Music.delete(req.params.id).then((music: any) => {
        res.json({ status: 'tune you later' })
    });
});

export default router;
