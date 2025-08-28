import { PrismaClient } from '@prisma/client';
import * as argon2 from 'argon2';

const prisma = new PrismaClient();

async function main() {
  const password = await argon2.hash('34670cfafbd9');
  await prisma.user.upsert({
    where: { email: 'mis@acemcbohol.com' },
    update: {},
    create: {
      email: 'mis@acemcbohol.com',
      username: 'admin',
      hashedPassword: password,
      role: ['ADMIN'],
      profile: {
        create: {
          firstName: 'Joe Mark',
          lastName: 'Gimeno',
        },
      },
    },
  });

  // --- Seed departments ---
  const departments = [
    { name: 'HR', description: 'Human Resources' },
    { name: 'ADMIN', description: 'Administrative Department' },
    { name: 'ENGR', description: 'Engineering and Maintenance' },
    { name: 'BIOMED', description: 'Biomed and Maintenance' },
    { name: 'BILLING', description: 'Billing and Cashier' },
    { name: 'ANCILLARY', description: 'Ancillary' },
    { name: 'NURSING', description: 'Nursing' },
    { name: 'MIS', description: 'Management Information System' },
  ];

  await prisma.department.createMany({
    data: departments,
    skipDuplicates: true,
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
