import { Company } from '../entities/company.entity';
import { SIZE } from '../entities/size.enum';

export const companies: Partial<Company[]> = [
  {
    id: 1,
    name: 'Company 1',
    description: 'Company 1 description',
    size: SIZE.SMALL,
  },
  {
    id: 2,
    name: 'Company 2',
    description: 'Company 2 description',
    size: SIZE.MEDIUM,
  },
  {
    id: 3,
    name: 'Company 3',
    description: 'Company 3 description',
    size: SIZE.LARGE,
  },
  {
    id: 4,
    name: 'Company 4',
    description: 'Company 4 description',
    size: SIZE.SMALL,
  },
  {
    id: 5,
    name: 'Company 5',
    description: 'Company 5 description',
    size: SIZE.MEDIUM,
  },
];
