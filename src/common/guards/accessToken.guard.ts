import {
  Injectable,
  ExecutionContext,
  HttpException,
  HttpStatus,
  ForbiddenException,
  UnauthorizedException,
} from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { AuthService } from 'src/auth/auth.service';

@Injectable()
export class AccessTokenGuard extends AuthGuard('jwt') {
  constructor(
    private reflector: Reflector,
    private jwt: JwtService,
    private config: ConfigService,
    private authService: AuthService,
  ) {
    super();
  }

  tokenVerify(token: string, response: Response) {
    try {
      this.jwt.verify(token, {
        secret: this.config.get('JWT_SECRET'),
      });
      return true;
    } catch (error) {
      console.log('Token is expired');
      // throw new HttpException('Token is expired', HttpStatus.BAD_REQUEST);
      this.authService.clearCookie(response);
      return false;
    }
  }

  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context);
    const request = ctx.getContext().req;
    const response = ctx.getContext().res;

    // get isPublic metadata
    const isPublic = this.reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);

    // check if route is public then return request
    if (isPublic) {
      return request;
    }

    // Extract token from cookies
    const token = request.cookies[this.config.get('TOKEN_NAME')];
    // console.log('Token:', token);

    // check if token is not found
    if (!token) {
      throw new UnauthorizedException('Token not found');
    }

    // check if token is valid
    this.tokenVerify(token, response);

    // set info in headers
    const currentUser = this.jwt.verify(token, {
      secret: this.config.get('JWT_SECRET'),
    });

    request.headers.authorization = `Bearer ${token}`;
    request.userInfo = currentUser;

    return request;
  }

  canActivate(context: ExecutionContext) {
    const isPublic = this.reflector.getAllAndOverride('isPublic', [
      context.getHandler(),
      context.getClass(),
    ]);
    if (isPublic) {
      return true;
    }

    return super.canActivate(context);
  }
}
