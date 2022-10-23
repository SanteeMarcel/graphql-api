import { Field, InputType } from '@nestjs/graphql';
import { SIZE } from '../entities/size.enum';

@InputType()
export class CreateCompanyInput {
  @Field()
  name: string;

  @Field({ nullable: true })
  description?: string;

  @Field({ nullable: true })
  size?: SIZE;
}
