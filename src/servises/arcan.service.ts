import { CustomException } from '../common/exception/customException.js';
import { ArcanEntity } from '../entities/arcan.js';
import { arcanRepository } from '../repository/repositories.js';
import { Request, Response } from 'express';

class ArcanService {
    constructor() {}

    public async create(req: Request, res: Response) {
        const arcan = new ArcanEntity();
        const { name, arcan_number } = req.body;
        arcan.name = name;
        arcan.arcan_number = arcan_number;
        await arcanRepository.save(arcan).catch(() => {
            throw new CustomException('failed to add to the database', '400');
        });
        res.status(200).json({ message: 'successfully' });
    }
}

export const arcanService = new ArcanService();
