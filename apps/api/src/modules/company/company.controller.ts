import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CompanyService } from './company.service';
import { CompanyEntity } from 'src/models/company.entity';
import { ApiTags } from '@nestjs/swagger';
import IResponse from 'src/common/types';

@Controller({ version: '1', path: 'companies' })
@ApiTags('Companies Management Routes')
export class CompanyController {
  constructor(private readonly companyService: CompanyService) { }

  @Post()
  async create(
    @Body() payload: Partial<CompanyEntity>
  ): Promise<IResponse> {
    const response = await this.companyService.create(payload);
    return {
      data: response,
      status: 201
    }
  }

  @Get()
  async findAll(): Promise<IResponse> {
    const companies = await this.companyService.findAll();
    return {
      data: companies,
      status: 200,
      count: companies.length
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    this.companyService.remove(+id);
  }
}
