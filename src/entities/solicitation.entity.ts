import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn} from "typeorm";
import { Wastes } from "./wastes.entity";
import { User } from "./user.entity";

@Entity('Solicitation')
export class Solicitation {
    @PrimaryGeneratedColumn()
    solicitation_id: number;

    @ManyToOne((type) => User, (user) => user.solicitations)
    users: User;
  
    @OneToMany((type) => Wastes, (waste) => waste.solicitaiton, {
        eager: true,
    })
    wastes: Wastes[];

    @Column()
    points:number;

    @Column()
    status: string;

    @Column('boolean',{default:false})
    isReceive: boolean;

    @Column()
    create_date:Date;

    @Column()
    update_date:Date;

}
