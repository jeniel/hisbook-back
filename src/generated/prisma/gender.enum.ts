import { registerEnumType } from '@nestjs/graphql';

export enum Gender {
    Male = "Male",
    Female = "Female",
    Others = "Others"
}


registerEnumType(Gender, { name: 'Gender', description: undefined })
