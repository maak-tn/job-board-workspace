import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
// *** CUSTOM IMPORTS
import { ConnectionConfiguration } from 'src/common/data-source';
import { CompanyController } from '../company/company.controller';
import { CompanyService } from '../company/company.service';
import { ApplicationController } from '../application/application.controller';
import { ApplicationService } from '../application/application.service';
import { JobController } from '../job/job.controller';
import { JobService } from '../job/job.service';
import { CompanyEntity } from 'src/models/company.entity';
import { JobEntity } from 'src/models/job.entity';
import { ApplicationEntity } from 'src/models/application.entity';
import { CustomMailerService } from 'src/modules/mailer/mailer.service';
import { MailerController } from '../mailer/mailer.controller';


@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync(ConnectionConfiguration),
    TypeOrmModule.forFeature([
      CompanyEntity,
      JobEntity,
      ApplicationEntity,
    ]),
  ],
  controllers: [
    AppController,
    CompanyController,
    ApplicationController,
    JobController,
    MailerController,
  ],
  providers: [
    AppService,
    CompanyService,
    ApplicationService,
    JobService,
    CustomMailerService,
  ],
})
export class AppModule { }
