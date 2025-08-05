import { Role } from '@/generated/prisma/role.enum';

export type DecodedToken = {
  userId: string;
  profileId: string;
  departmentId: string;
  role: Role[];
  email: string;
  username: string;
  iat: number;
  exp: number;
};
