import { Role } from '@/generated/prisma/role.enum';
import { CreateUserInput } from '@/modules/global/user/dto/create-user.input';
import { Field, InputType, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field()
  username?: string;

  @Field()
  password?: string;

  @Field(() => [Role], { nullable: true })
  role?: Role[];

  @Field({ nullable: true })
  departmentId?: string;
}
