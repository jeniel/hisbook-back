import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import { JwtPayload, JwtPayload2 } from '@/shared/common/types/jwtPayload';
import { AuthService } from '../auth.service';

@Injectable()
export class AccessTokenStrategy extends PassportStrategy(Strategy, 'jwt') {
  constructor(
    config: ConfigService,
    private authService: AuthService,
  ) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: config.get('JWT_SECRET'),
      passReqtoCallback: true,
    });
  }

  async validate(payload: JwtPayload2) {
    // // console.log('Payload:', payload);
    //  console.log(await this.authService.validateUser(payload));
    return await this.authService.validateUser(payload);
  }
}
