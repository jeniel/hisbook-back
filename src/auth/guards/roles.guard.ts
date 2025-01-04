// import { Injectable, ExecutionContext, CanActivate } from "@nestjs/common";
// import { Reflector } from "@nestjs/core";
// import { GqlExecutionContext, } from "@nestjs/graphql";
// import { Role } from "src/@generated/prisma/role.enum";
// import { PrismaService } from "src/prisma/prisma.service";



// @Injectable()

// export class RolesGuard implements CanActivate {
//     constructor(private reflector: Reflector, private prisma: PrismaService) { }

//     async canActivate(context: ExecutionContext) {
//         const requiredRoles = this.reflector.getAllAndOverride('roles', [context.getHandler(), context.getClass()])
//         // console.log(requiredRoles)
//         if (!requiredRoles) {
//             return true
//         }

//         const ctx = GqlExecutionContext.create(context)
//         const req = ctx.getContext().req

//         const userInfo = await this.prisma.user.findUnique({
//             where: {
//                 email: req.user.email
//             }
//         })

//         //console.log(req)
//         return requiredRoles.some((role: Role) => userInfo.role.includes(role))

//     }
// }