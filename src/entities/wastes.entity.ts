import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn, OneToMany} from "typeorm";
import { Solicitation } from "./solicitation.entity";
import { User } from "./user.entity";

@Entity('Wastes')
export class Wastes {

    @PrimaryGeneratedColumn()
    wastes_id: number;

    @Column()
    points:number;

    @Column()
    type: string;

    @Column({ nullable: true })
    category:string

    @Column({ nullable: true })
    device:string;

    @Column({ nullable: true })
    state:string;

    @Column({ nullable: true })

    weight:string;

    @ManyToOne((type) => Solicitation, (user) => user.wastes)
    solicitaiton: Solicitation;

}
