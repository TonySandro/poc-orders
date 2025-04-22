import { Entity, Column, PrimaryGeneratedColumn} from "typeorm";

@Entity('Product')
export class Product {
    @PrimaryGeneratedColumn()
    product_id: number;

    @Column()
    image_primary:string;

    @Column()
    quantity:number;

    @Column()
    image_lateral_1:string;

    @Column()
    points: number;

    @Column()
    type: string;

    @Column()
    describe:string;

    @Column()
    isPromotion:boolean;
}
