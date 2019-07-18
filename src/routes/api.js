import express from 'express';
import RawAudioController from '../controllers/RawAudioController'

const router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
    res.render('api', { title: 'Express' });
});

router.post('/raw_audio', RawAudioController);

export default router;
