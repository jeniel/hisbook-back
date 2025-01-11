import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { PatientRegistrationArgs } from './args/patient-registration-args';

@Injectable()
export class PatientService {
  constructor(private prisma: PrismaService) {}

  async findAll() {
    return [];
  }

  async patientRegistration(args: PatientRegistrationArgs) {
    return this.prisma.case.create({
      data: {
        caseNo: '123',
        patient: {
          create: {
            firstName: 'Wilson',
            lastName: 'Hinacay',
            middleName: 'Joseph',
          },
        },
      },
    });
  }
}
