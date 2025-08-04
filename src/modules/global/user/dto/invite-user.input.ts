import { InputType, Field } from '@nestjs/graphql';
import { Role } from '@/generated/@generated/prisma/role.enum';
import { IsEmail, IsNotEmpty, IsArray, ArrayNotEmpty, Length, Matches, IsOptional, IsDateString } from 'class-validator';

@InputType()
export class InviteUserInput {
  @Field(() => String, { nullable: false })
  @IsEmail({}, { message: 'Please provide a valid email address' })
  @IsNotEmpty({ message: 'Email is required' })
  email!: string;

  @Field(() => [Role], { nullable: false })
  @IsArray({ message: 'Role must be an array' })
  @ArrayNotEmpty({ message: 'At least one role must be provided' })
  role!: Role[];

  @Field(() => String, { nullable: false })
  @IsNotEmpty({ message: 'Tenant ID is required' })
  tenantId!: string;
}

@InputType()
export class CompleteProfileInput {
  @Field(() => String, { nullable: false })
  @IsNotEmpty({ message: 'Token is required' })
  token!: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty({ message: 'First name is required' })
  @Length(1, 50, { message: 'First name must be between 1 and 50 characters' })
  firstName!: string;

  @Field(() => String, { nullable: true })
  @IsOptional()
  @Length(1, 50, { message: 'Middle name must be between 1 and 50 characters' })
  middleName?: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty({ message: 'Last name is required' })
  @Length(1, 50, { message: 'Last name must be between 1 and 50 characters' })
  lastName!: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty({ message: 'Username is required' })
  @Length(3, 30, { message: 'Username must be between 3 and 30 characters' })
  @Matches(/^[a-zA-Z0-9._-]+$/, { 
    message: 'Username can only contain letters, numbers, dots, underscores, and hyphens' 
  })
  username!: string;

  @Field(() => String, { nullable: false })
  @IsNotEmpty({ message: 'Password is required' })
  @Length(8, 100, { message: 'Password must be at least 8 characters long' })
  password!: string;

  @Field(() => Date, { nullable: true })
  @IsOptional()
  @IsDateString({}, { message: 'Birth date must be a valid date' })
  birthDate?: Date;
}
