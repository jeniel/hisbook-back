import { SetMetadata } from '@nestjs/common';
import { Role } from '@/generated/@generated/prisma/role.enum';

export const Roles = (roles: Role[]) => SetMetadata('roles', roles);
