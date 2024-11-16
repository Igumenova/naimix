import { IRecruiter } from './IRecruiter';
import { ITeamMember } from './ITeamMember';

export interface IMyTeam {
    name: string;
    description: string;
    recruiter: IRecruiter;
    members: ITeamMember[];
}
