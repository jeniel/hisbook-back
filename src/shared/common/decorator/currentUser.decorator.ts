import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';
import { DecodedToken } from '@/shared/common/types/decodedToken';

export const CurrentUser = createParamDecorator(
  (_: undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    const userInfo = req.userInfo as DecodedToken;

    return userInfo;
  },
);
