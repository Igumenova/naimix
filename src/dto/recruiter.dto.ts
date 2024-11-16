import { IRecruiter } from '../common/interface/IRecruiter.js';
import { IMyTeam } from '../common/interface/IMyTeam.js';

export class RecruiterDto implements IRecruiter {
    name: string;
    surname: string;
    patronymic: string;
    email: string;
    hashed_password: string;
    my_teams: IMyTeam[];

    constructor(
        name: string,
        surname: string,
        patronymic: string,
        email: string,
        hashed_password: string,
        my_teams: IMyTeam[]
    ) {
        this.name = name;
        this.surname = surname;
        this.patronymic = patronymic;
        this.email = email;
        this.hashed_password = hashed_password;
        this.my_teams = my_teams;
    }
}
