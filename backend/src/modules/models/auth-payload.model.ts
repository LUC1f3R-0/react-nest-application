import { Field, ObjectType } from '@nestjs/graphql';
import { UserModel } from './user.model';

@ObjectType()
class AuthPayload {
  @Field()
  message!: string;

  @Field(() => UserModel)
  user!: UserModel;
}

export { AuthPayload };
