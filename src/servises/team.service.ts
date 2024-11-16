import { CustomException } from '../common/exception/customException';
import { TeamEntity } from '../entities/team';
import { teamRepository } from '../repository/repositories.js';
import { recruiterRepository } from '../repository/repositories.js';

class TeamService {
    public async createTeam(req, res) {
        const { name, description, recruiterId } = req.body;

        const recruiter = await recruiterRepository
            .findOne({
                relations: {
                    my_teams: true
                },
                where: {
                    id: recruiterId
                }
            })
            .catch(() => {
                throw new CustomException('The recruiter was not found', '404');
            });
        
        const team = new TeamEntity();
        team.name = name;
        team.description = description;
        team.members = [];
        team.recruiter = recruiter;

        await teamRepository.save(team);
        recruiter.my_teams = [...recruiter.my_teams, team];
        console.log(recruiter);

        await recruiterRepository.save(recruiter);

        return res.status(200).json({ message: 'successfully' });
    }
}

export const teamService = new TeamService();
