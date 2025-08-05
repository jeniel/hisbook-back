// import { Injectable } from '@nestjs/common';
// import { ThrottlerGuard } from '@nestjs/throttler';
// import { ExecutionContext } from '@nestjs/common';
// import { GqlExecutionContext } from '@nestjs/graphql';

// @Injectable()
// export class GraphQLThrottlerGuard extends ThrottlerGuard {
//   getRequest(context: ExecutionContext) {
//     const ctx = GqlExecutionContext.create(context);
//     const request = ctx.getContext().req;
//     const response = ctx.getContext().res;

//     console.log('isPublic');

//     return request;
//   }
// }
