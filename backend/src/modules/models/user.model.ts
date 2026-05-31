import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
class UserModel {
  @Field()
  uuid!: string;

  @Field()
  name!: string;

  @Field()
  username!: string;

  @Field()
  email!: string;

  @Field(() => Date)
  createdAt!: Date;

  @Field(() => Date)
  updatedAt!: Date;
}

export { UserModel };
