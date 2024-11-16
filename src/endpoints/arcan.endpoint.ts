import { arcanService } from '../servises/arcan.service.js';
import express from 'express';

export const arcanEndpoint = express.Router();

arcanEndpoint.get('/create', (req, res, next) => {
    arcanService.create(req, res).catch(next);
});
