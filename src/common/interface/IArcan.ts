import { ITeamMember } from './ITeamMember';

export interface IArcan {
    arcan_number: number;
    name: string;
    members: ITeamMember[];
}
