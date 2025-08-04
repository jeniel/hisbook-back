import { createParamDecorator, ExecutionContext, Req } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { PrismaClient } from '@prisma/client';
// import { NameFormatter } from '@/utils/helper';
import { PrismaService } from '@/core/database/prisma/prisma.service';
import { DecodedToken } from '@/shared/common/types/decodedToken';

export const CurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    const userInfo = req.userInfo as DecodedToken;

    return userInfo;
  },
);

// export const CurrentUserName = createParamDecorator(
//   (_: undefined, context: ExecutionContext) => {
//     const ctx = GqlExecutionContext.create(context);
//     const req = ctx.getContext().req;
//     // console.log('req.user => ', req.user);
//     return req.user.username;
//   },
// );

// export const CurrentEmail = createParamDecorator(
//   (_: undefined, context: ExecutionContext) => {
//     const ctx = GqlExecutionContext.create(context);
//     const req = ctx.getContext().req;
//     // console.log("req.user => ", req.user)
//     return req.user.email;
//   },
// );

// export const CurrentUserInfo = createParamDecorator(
//   async (_: undefined, context: ExecutionContext) => {
//     const ctx = GqlExecutionContext.create(context);
//     const req = ctx.getContext().req;
//     // console.log("req.user => ", req.user)
//     let userInfo = {};

//     try {
//       userInfo = await prisma.user.findUnique({
//         where: {
//           email: req.user.email,
//         },
//         include: {
//           profile: true,
//         },
//       });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       await prisma.$disconnect();
//     }
//     // console.log('REQUEST', req);
//     return NameFormatter(userInfo);
//   },
// );

// export const CurrentUserProfile = createParamDecorator(
//   async (_: undefined, context: ExecutionContext) => {
//     const ctx = GqlExecutionContext.create(context);
//     const req = ctx.getContext().req;
//     // console.log("req.user => ", req.user)
//     let profileInfo = {};
//     try {
//       profileInfo = await prisma.user.findUnique({
//         where: {
//           email: req.user.email,
//         },
//         // include: {
//         //   profile: true,
//         // },
//         select: {
//           profile: true,
//         },
//       });
//     } catch (error) {
//       console.log(error);
//     } finally {
//       await prisma.$disconnect();
//     }

//     return profileInfo;
//   },
// );
