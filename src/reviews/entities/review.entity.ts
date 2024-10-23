import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('reviews')
export class Review {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar', {length:20})
    title: string

    @Column('varchar')
    comment: string

    @Column('double')
    rating:number
}
