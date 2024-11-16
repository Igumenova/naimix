import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { IArcan } from '../common/interface/IArcan.js';
import { TeamMemberEntity } from './teamMember.js';
import { ITeamMember } from '../common/interface/ITeamMember.js';

@Entity()
export class ArcanEntity implements IArcan {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true })
    arcan_number: number;

    @Column({ unique: true })
    name: string;

    @OneToMany(() => TeamMemberEntity, (member) => member.arcan)
    members: ITeamMember[];
}
