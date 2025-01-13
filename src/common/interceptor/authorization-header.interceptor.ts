import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { GqlExecutionContext } from '@nestjs/graphql';

@Injectable()
export class AuthorizationHeaderInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    // const ctx = GqlExecutionContext.create(context);
    // const request = ctx.getContext().req;

    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const response = ctx.getContext().res;

    
    console.log('Request in interceptor:', request.headers);

    // Extract token from cookies
    const token = request.cookies['his-token'];
    console.log('Token in  interceptor:', token);

    if (token) {
      request.headers.authorization = `Bearer ${token}`;
    }

    return next.handle();
  }
}
