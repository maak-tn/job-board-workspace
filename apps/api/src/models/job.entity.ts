import { Column, Entity, JoinColumn, ManyToOne, OneToMany } from "typeorm";
import { BaseEntity } from "./base.entity";
import { CompanyEntity } from "./company.entity";
import { ApplicationEntity } from "./application.entity";

@Entity('job')
export class JobEntity extends BaseEntity {

    @Column({ default: 'Job Title Not Available' })
    title: string;

    @Column({ default: 'Job Description Not Available' })
    description: string;

    // each job belongs to one company
    @ManyToOne(() => CompanyEntity, (company) => company.jobs)
    company: CompanyEntity;

    @OneToMany(() => ApplicationEntity, (application) => application.job)
    @JoinColumn()
    applications: JobEntity;
}
