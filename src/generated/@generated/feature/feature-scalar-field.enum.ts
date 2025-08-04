import { registerEnumType } from '@nestjs/graphql';

export enum FeatureScalarFieldEnum {
    id = "id",
    name = "name",
    description = "description",
    isActive = "isActive",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(FeatureScalarFieldEnum, { name: 'FeatureScalarFieldEnum', description: undefined })
