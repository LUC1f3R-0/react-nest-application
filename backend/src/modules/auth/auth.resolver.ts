import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';

// import { AuthService } from './auth.service';
// import { RegisterInput } from './dto/register.input';
// import { AuthPayload } from './models/auth-payload.model';
import { AuthService } from './auth.service';
import { AuthPayload } from '../models/auth-payload.model';
import { RegisterInput } from '../dto/register.input';

@Resolver()
class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => String)
  authHello(): string {
    return 'Auth GraphQL is working';
  }

  @Mutation(() => AuthPayload)
  async register(@Args('input') input: RegisterInput): Promise<AuthPayload> {
    return this.authService.register(input);
  }
}

export { AuthResolver };
