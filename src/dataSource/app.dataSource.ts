import { DataSource } from 'typeorm';
import { RecruiterEntity } from '../entities/recruiter.js';
import { ArcanEntity } from '../entities/arcan.js';
import { TeamEntity } from '../entities/team.js';
import { TeamMemberEntity } from '../entities/teamMember.js';

export const AppDataSource = new DataSource({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: '12345',
    database: 'postgres',
    synchronize: true,
    logging: true,
    entities: [RecruiterEntity, ArcanEntity, TeamEntity, TeamMemberEntity],
    subscribers: [],
    migrations: []
});

AppDataSource.initialize()
    .then(() => {})
    .catch((error) => console.log(error));
