import { Resolver } from '@nestjs/graphql';
import { CustomersService } from './customers.service';

@Resolver()
export class CustomersResolver {
  constructor(private readonly customersService: CustomersService) {}
}
