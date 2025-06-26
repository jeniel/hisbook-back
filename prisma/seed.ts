import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash('34670cfafbd9');
  await prisma.user.upsert({
    where: { email: 'joe@advancedlocal.com' },
    update: {},
    create: {
      email: 'joe@advancedlocal.com',
      username: 'admin',
      hashedPassword: password,
      role: ['SUPER_ADMIN'],
      isActive: true,
      isApprove: true,
      profile: {
        create: {
          firstName: 'JOE MARK',
          lastName: 'GIMENO',
        },
      },
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
