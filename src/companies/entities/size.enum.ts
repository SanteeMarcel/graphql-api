import { registerEnumType } from '@nestjs/graphql';

export enum SIZE {
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
}

registerEnumType(SIZE, {
  name: 'SIZE',
  description: 'Size of the company',
});
