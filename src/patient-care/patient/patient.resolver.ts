import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { Patient } from './entities/patient.entity';
import { PatientService } from './patient.service';
import { PatientRegistrationArgs } from './args/patient-registration-args';
import { GeneralMsg } from 'src/common/entities/general-msg.entites';

@Resolver(() => Patient)
export class PatientResolver {
  constructor(private readonly patientService: PatientService) {}

  @Query(() => [Patient], { name: 'findAlPatient' })
  findAll() {
    return this.patientService.findAll();
  }

  @Mutation(() => GeneralMsg)
  patientRegistration(@Args() args: PatientRegistrationArgs) {
    return this.patientService.patientRegistration(args);
  }
}
