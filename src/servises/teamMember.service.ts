import { Request, Response } from 'express';
import { TeamEntity } from '../entities/team';
import { arcanRepository, teamRepository } from '../repository/repositories.js';
import { teamMemberRepository } from '../repository/repositories.js';
import { CustomException } from '../common/exception/customException.js';
import { getArcan } from '../common/arcan/getArcan.js';
import { TeamMemberEntity } from '../entities/teamMember';

class TeamMemberService {
    public async addMember(req: Request, res: Response) {
        const { name, birthday, department, personal_qualities, teamId } = req.body;

        const team = await teamRepository
            .findOne({
                relations: {
                    members: true
                },
                where: {
                    id: teamId
                }
            })
            .catch((err) => {
                throw new CustomException('');
            });

        const teamMember = new TeamMemberEntity();
        teamMember.name = name;
        teamMember.birthday = birthday;
        teamMember.department = department;
        teamMember.personal_qualities = personal_qualities;
        const numberArcan = getArcan(birthday);

        // const arcan = await arcanRepository.findOneBy({ arcan_number: numberArcan });

        team.members = [...team.members];
        await teamRepository.save(team);

        return res.status(200).json({ message: 'successfully' });
    }
}

export const teamMemberService = new TeamMemberService();
