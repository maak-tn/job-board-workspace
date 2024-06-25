import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CompanyEntity } from 'src/models/company.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CompanyService {

  constructor(
    @InjectRepository(CompanyEntity) private readonly companyRepository: Repository<CompanyEntity>
  ) { }

  async create(payload: Partial<CompanyEntity>) {
    try {
      return await this.companyRepository.save(payload);
    } catch (error) {
      return error
    }
  }

  async findAll() {
    try {
      return await this.companyRepository.find();
    } catch (error) {
      return error
    }
  }

  async remove(id: number) {
    try {
      return await this.companyRepository.delete(id);
    } catch (error) {
      return error
    }
  }
}
