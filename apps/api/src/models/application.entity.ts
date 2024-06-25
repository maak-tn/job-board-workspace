import { Column, Entity, ManyToOne, OneToOne } from "typeorm";
import { BaseEntity } from "./base.entity";
import { JobEntity } from "./job.entity";


@Entity('application')
export class ApplicationEntity extends BaseEntity {

    @Column({ default: 'Jhon Doe' })
    applicant_name: string;

    @Column({ default: 'jhon@example.com' })
    applicant_email: string;

    @Column({ default: 'Application text' })
    application_text: string;

    // each application belong to a job
    @ManyToOne(() => JobEntity, (job) => job.applications, { onDelete: 'CASCADE', cascade: true })
    job: JobEntity;
}
