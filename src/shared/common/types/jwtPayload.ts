export type JwtPayload = {
  sub: string;
  email: string;
  userId: string;
};

export type JwtPayloadwithRefreshtoken = JwtPayload & {
  refreshToken: string;
};

export interface JwtPayload2 {
  userId: string;
  email: string;
  username: string;
  iat: number;
  exp: number;
}
