import { AppDataSource } from '../dataSource/app.dataSource.js';
import { RecruiterEntity } from '../entities/recruiter.js';
import { ArcanEntity } from '../entities/arcan.js';
import { TeamEntity } from '../entities/team.js';
import { TeamMemberEntity } from '../entities/teamMember.js';

export const recruiterRepository = AppDataSource.getRepository(RecruiterEntity);
export const arcanRepository = AppDataSource.getRepository(ArcanEntity);
export const teamRepository = AppDataSource.getRepository(TeamEntity);
export const teamMemberRepository = AppDataSource.getRepository(TeamMemberEntity);
