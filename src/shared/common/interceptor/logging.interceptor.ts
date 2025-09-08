import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from '@nestjs/common';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable()
export class LoggingInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    const gqlContext = context.getType<'graphql'>(); // Check the context type (GraphQL, HTTP, etc.)

    if (gqlContext !== 'graphql') {
      return next.handle(); // If not GraphQL, skip processing
    }

    const gqlInfo = context.getArgs()[3]; // GraphQL execution context (4th argument)
    const query = gqlInfo?.fieldName;
    const now = Date.now();

    console.log(`GraphQL Query: ${query}`);

    return next
      .handle()
      .pipe(
        tap(() =>
          console.log(
            `GraphQL Query ${query} completed in ${Date.now() - now}ms`,
          ),
        ),
      );
  }
}
