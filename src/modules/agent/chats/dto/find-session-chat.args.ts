import { ArgsType, Field, Int } from '@nestjs/graphql';
import { IsString, IsNotEmpty, IsInt, Min } from 'class-validator';

@ArgsType()
export class FindSessionChatArgs {
  @Field(() => String)
  @IsString()
  @IsNotEmpty()
  tenantId: string;

  @Field(() => Int, { defaultValue: 1 })
  @IsInt()
  @Min(1)
  page: number;

  @Field(() => Int, { defaultValue: 10 })
  @IsInt()
  @Min(1)
  limit: number;
}