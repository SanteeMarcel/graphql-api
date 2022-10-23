import { Args, Int, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CompaniesService } from './companies.service';
import { CreateCompanyInput } from './dto/create-company.input';
import { Company } from './entities/company.entity';

@Resolver(() => Company)
export class CompaniesResolver {
  constructor(private readonly companiesService: CompaniesService) {}

  @Query(() => [Company])
  companies() {
    return this.companiesService.findAll();
  }

  @Query(() => Company)
  company(@Args('id', { type: () => Int }) id: number) {
    return this.companiesService.findOne(id);
  }

  @Mutation(() => Company)
  createCompany(
    @Args('createCompanyInput')
    createCompanyInput: CreateCompanyInput,
  ) {
    return this.companiesService.create(createCompanyInput);
  }

  @Mutation(() => Company)
  updateCompany(
    @Args('id', { type: () => Int }) id: number,
    @Args('updateCompanyInput')
    updateCompanyInput: CreateCompanyInput,
  ) {
    return this.companiesService.update(id, updateCompanyInput);
  }

  @Mutation(() => Company)
  removeCompany(@Args('id', { type: () => Int }) id: number) {
    return this.companiesService.remove(id);
  }
}
