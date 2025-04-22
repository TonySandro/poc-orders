import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany, OneToOne, JoinColumn} from "typeorm";
import { Address } from "./address.entity";
import { Solicitation } from "./solicitation.entity";
import { Orders } from "./orders.entity";


@Entity('User')
export class User {
    @PrimaryGeneratedColumn()
    user_id: number;

    @Column()
    name:string;

    @Column()
    role: string;
    
    @Column()
    birthDate: Date;

    @Column()
    phone: string;

    @Column('int',{default:10000})
    points: number;

    @Column()
    email:string;

    @Column()
    password:string;

    @Column()
    cpf:string;

    @OneToOne(() => Address, { eager: true })
    @JoinColumn()
    address: Address;

    @OneToMany((type) => Solicitation, (solicitaiton) => solicitaiton.users, {
        eager: true,
    })
    solicitations: Solicitation[];

    @OneToMany((type) => Solicitation, (solicitaiton) => solicitaiton.users, {
        eager: true,
    })
    orders: Orders[];

}
