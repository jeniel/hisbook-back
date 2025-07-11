import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ReportsService } from './reports.service';
import { Reports } from './entities/report.entity';
import { CreateReportInput } from './dto/create-report.input';
import { UpdateReportInput } from './dto/update-report.input';
import { Public } from 'src/common/decorator/public.decorator';

@Resolver(() => Reports)
export class ReportsResolver {
  constructor(private readonly reportsService: ReportsService) {}


  @Public()
  @Mutation(() => Reports)
  createReport(@Args('createReportInput') createReportInput: CreateReportInput) {
    console.log('createReportInput', createReportInput);
    return this.reportsService.create(createReportInput);
  }

  // @Query(() => [Report], { name: 'reports' })
  // findAll() {
  //   return this.reportsService.findAll();
  // }

  // @Query(() => Report, { name: 'report' })
  // findOne(@Args('id', { type: () => Int }) id: number) {
  //   return this.reportsService.findOne(id);
  // }

  // @Mutation(() => Report)
  // updateReport(@Args('updateReportInput') updateReportInput: UpdateReportInput) {
  //   return this.reportsService.update(updateReportInput.id, updateReportInput);
  // }

  // @Mutation(() => Report)
  // removeReport(@Args('id', { type: () => Int }) id: number) {
  //   return this.reportsService.remove(id);
  // }
}
