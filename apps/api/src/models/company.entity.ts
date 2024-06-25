import { Column, Entity, JoinColumn, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity"
import { JobEntity } from "./job.entity";


@Entity('company')
export class CompanyEntity extends BaseEntity {

    @Column({ unique: true })
    name: string;

    @OneToMany(() => JobEntity, job => job.company)
    @JoinColumn()
    jobs: JobEntity[]
}
