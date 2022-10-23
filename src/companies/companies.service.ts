import { Injectable } from '@nestjs/common';
import { companies } from './data/companies';
import { CreateCompanyInput } from './dto/create-company.input';
import { Company } from './entities/company.entity';

@Injectable()
export class CompaniesService {
  private readonly companies: Company[] = companies;

  findAll(): Company[] {
    return this.companies;
  }

  findOne(id: number): Company {
    return this.companies.find((company) => company.id === id);
  }

  create(createCompanyInput: CreateCompanyInput): Company {
    const company = {
      id: this.companies.length + 1,
      ...createCompanyInput,
    };
    this.companies.push(company);
    return company;
  }

  update(id: number, updateCompanyInput: CreateCompanyInput): Company {
    const company = this.findOne(id);
    Object.assign(company, updateCompanyInput);
    return company;
  }

  remove(id: number): Company {
    const company = this.findOne(id);
    this.companies.splice(this.companies.indexOf(company), 1);
    return company;
  }
}
