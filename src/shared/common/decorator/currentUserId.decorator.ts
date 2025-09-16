import { DecodedToken } from '@/shared/common/types/decodedToken';
import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

export const CurrentUserId = createParamDecorator(
  (_: undefined, context: ExecutionContext) => {
    const ctx = GqlExecutionContext.create(context);
    const req = ctx.getContext().req;

    const userInfo = req.userInfo as DecodedToken | undefined;

    if (!userInfo?.departmentId) {
      throw new Error('departmentId is missing in user token');
    }

    return userInfo.departmentId;
  },
);
