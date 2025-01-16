import { Role } from 'src/@generated/prisma/role.enum';

export type DecodedToken = {
  userId: string;
  profileId: string;
  role: Role[];
  email: string;
  username: string;
  iat: number;
  exp: number;
};
