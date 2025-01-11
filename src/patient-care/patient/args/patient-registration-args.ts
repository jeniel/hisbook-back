import { ArgsType, Field, InputType, OmitType } from '@nestjs/graphql';
import { Type } from 'class-transformer';
import { CaseCreateInput } from 'src/@generated/case/case-create.input';
import { PatientCreateInput } from 'src/@generated/patient/patient-create.input';
import { omitTypes } from 'src/helper/omittypes';

@InputType()
export class CreatePatientInput extends OmitType(PatientCreateInput, [
  'case',
  ...(omitTypes as any),
]) {
  //extend here
}

@InputType()
export class CreateCaseIn extends OmitType(CaseCreateInput, [
  'vitalSign',
  'patient',
  'caseNo',
  ...(omitTypes as any),
]) {}

@ArgsType()
export class PatientRegistrationArgs {
  @Field(() => CreatePatientInput, { nullable: false })
  @Type(() => CreatePatientInput)
  patient?: CreatePatientInput;

  @Field(() => CreateCaseIn, { nullable: false })
  @Type(() => CreateCaseIn)
  case?: CreateCaseIn;
}
