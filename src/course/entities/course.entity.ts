import {Column,Entity, PrimaryGeneratedColumn } from "typeorm"


@Entity('courses')
export class Course {
    @PrimaryGeneratedColumn()
    id: number

    @Column('varchar')
    title: string

    @Column('varchar',{length:20})
    description: string

    @Column('double')
    weeks: number

    @Column('double',)
    tuition: number

    @Column('varchar',{length:30})
    minimumSkill: minimunSkill

    @Column('date')
    create: Date
}

type minimunSkill={
    'Beginner',
    'Intermediate',
    'Advance'

}
