import { Entity, Column, PrimaryGeneratedColumn, OneToMany, ManyToOne, JoinColumn, OneToOne} from "typeorm";
import { Product } from "./product.entity";
import { User } from "./user.entity";

@Entity('Orders')
export class Orders {
    @PrimaryGeneratedColumn()
    order_id: number;
    
    @ManyToOne((type) => User, (user) => user.solicitations)
    users: User;

    @Column()
    image_primary: string;

    @Column()
    points:number;

    @Column()
    create_date:Date;

    @Column()
    update_date:Date;
}
