import { Field, Int, ObjectType } from '@nestjs/graphql';
import { SIZE } from './size.enum';

@ObjectType()
export class Company {
  @Field(() => Int, { description: 'Company ID' })
  id: number;

  @Field(() => String, { description: 'Company name' })
  name: string;

  @Field(() => String, { description: 'Company description', nullable: true })
  description?: string;

  @Field({ description: 'Company size', nullable: true })
  size?: SIZE;
}
