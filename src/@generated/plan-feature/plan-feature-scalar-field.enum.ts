import { registerEnumType } from '@nestjs/graphql';

export enum PlanFeatureScalarFieldEnum {
    id = "id",
    planId = "planId",
    featureId = "featureId",
    limit = "limit",
    enabled = "enabled",
    createdAt = "createdAt",
    updatedAt = "updatedAt"
}


registerEnumType(PlanFeatureScalarFieldEnum, { name: 'PlanFeatureScalarFieldEnum', description: undefined })
