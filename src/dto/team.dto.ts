import { IMyTeam } from '../common/interface/IMyTeam';
import { IRecruiter } from '../common/interface/IRecruiter';
import { ITeamMember } from '../common/interface/ITeamMember';

export class MyTeamDto implements IMyTeam {
    name: string;
    description: string;
    recruiter: IRecruiter;
    members: ITeamMember[];

    constructor(name: string, description: string, recruiter: IRecruiter, members: ITeamMember[]) {
        this.name = name;
        this.description = description;
        this.recruiter = recruiter;
        this.members = members;
    }
}
