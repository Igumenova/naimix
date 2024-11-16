import express from 'express';
import { authEndpoint } from './auth.endpoint.js';
import { teamEndpoint } from './team.endpoint.js';
import { arcanEndpoint } from './arcan.endpoint.js';
import { engineEndpoint } from './engine.endpoint.js';

export const apiEndpoint = express.Router();

apiEndpoint.use('/auth', authEndpoint);
apiEndpoint.use('/team', teamEndpoint);
apiEndpoint.use('/arcan', arcanEndpoint);
apiEndpoint.use('/', engineEndpoint);
