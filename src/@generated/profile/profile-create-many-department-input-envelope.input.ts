import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { ProfileCreateManyDepartmentInput } from './profile-create-many-department.input';
import { Type } from 'class-transformer';

@InputType()
export class ProfileCreateManyDepartmentInputEnvelope {

    @Field(() => [ProfileCreateManyDepartmentInput], {nullable:false})
    @Type(() => ProfileCreateManyDepartmentInput)
    data!: Array<ProfileCreateManyDepartmentInput>;

    @Field(() => Boolean, {nullable:true})
    skipDuplicates?: boolean;
}
