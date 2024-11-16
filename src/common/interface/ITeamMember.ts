import { IArcan } from './IArcan';
import { IMyTeam } from './IMyTeam';

export interface ITeamMember {
    name: string;
    birthday: Date;
    department: string;
    personal_qualities: string;
    team: IMyTeam;
    arcan: IArcan;
}
