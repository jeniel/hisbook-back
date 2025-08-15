import { PrismaService } from '@/core/database/prisma/prisma.service';
import { Role } from '@/generated/prisma/role.enum';
import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class RolesGuard implements CanActivate {
  constructor(
    private reflector: Reflector,
    private prisma: PrismaService,
  ) {}

  async canActivate(context: ExecutionContext) {
    const requiredRoles = this.reflector.getAllAndOverride<Role[]>('roles', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (!requiredRoles) return true;

    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    const userRoles: Role[] = Array.isArray(req.userInfo.role)
      ? req.userInfo.role
      : [req.userInfo.role];

    return requiredRoles.some((role) => userRoles.includes(role));
  }
}
