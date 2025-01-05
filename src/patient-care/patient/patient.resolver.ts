import { Query, Resolver } from '@nestjs/graphql';
import { Patient } from './entities/patient.entity';
import { PatientService } from './patient.service';

@Resolver(() => Patient)
export class PatientResolver {
  constructor(private readonly patientService: PatientService) {}

  @Query(() => [Patient], { name: 'findAlPatient' })
  findAll() {
    return this.patientService.findAll();
  }
}
