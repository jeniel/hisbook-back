import { CreateUserInput } from '@/modules/global/user/dto/create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Role } from '@/generated/prisma/role.enum';

@InputType()
export class UpdateUserInput extends PartialType(CreateUserInput) {
  @Field(() => Int)
  id: number;

  @Field()
  username: string;

  @Field()
  password: string;

  @Field(() => [Role], { nullable: true })
  role?: Role[];

  @Field({ nullable: true })
  departmentId?: string;
}
