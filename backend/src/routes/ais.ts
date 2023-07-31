import express from 'express';
import aisService from '../services/aisService';

const router = express.Router();

router.get('/', (_req, res) => {
  res.send(aisService.getAll());
});

export default router;