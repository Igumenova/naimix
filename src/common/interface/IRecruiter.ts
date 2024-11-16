import { IMyTeam } from "./IMyTeam";

export interface IRecruiter {
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    hashed_password: string;
    my_teams: IMyTeam[];
}
