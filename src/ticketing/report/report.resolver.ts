import { Args, Query, Resolver } from '@nestjs/graphql';
import { TicketArgs } from './args/report.args';
import { TicketCountResponse } from './entities/report.entities';
import { ReportService } from './report.service';

@Resolver()
export class ReportResolver {
  constructor(private readonly reportService: ReportService) {}

  @Query(() => TicketCountResponse, { name: 'ticketReport' })
  ticketReport(@Args() args: TicketArgs) {
    return this.reportService.getTicketCount(args);
  }
}
