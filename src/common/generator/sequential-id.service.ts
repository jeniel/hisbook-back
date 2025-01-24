// src/global/id-generator/sequential-id.service.ts
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { padStart, split } from 'lodash';

export enum GeneratorType {
  TICKET_NO = 'TICKET_NO',
}

interface CountResult {
  result: number;
}

interface NextValResult {
  nextval: number;
}

@Injectable()
export class SequentialIdService {
  constructor(private readonly prisma: PrismaService) {}

  private async initGenerator(type: GeneratorType): Promise<void> {
    const sequenceName = `${type.toLowerCase()}_gen`;

    const count: CountResult[] = await this.prisma.$queryRawUnsafe(
      `SELECT count(*) as result FROM pg_class WHERE relkind='S' AND relname = $1`,
      sequenceName,
    );

    if (!count[0].result) {
      try {
        await this.prisma.$executeRawUnsafe(
          `CREATE SEQUENCE ${sequenceName} INCREMENT 1 MINVALUE 1 START 1`,
        );
      } catch (error) {
        console.error('Error creating sequence:', error);
      }
    }
  }

  async getNextValue(type: GeneratorType): Promise<string> {
    await this.initGenerator(type);
    const sequenceName = `${type.toLowerCase()}_gen`;

    const nextVal: NextValResult[] = await this.prisma.$queryRawUnsafe(
      `SELECT nextval($1)`,
      sequenceName,
    );

    const count = Number(nextVal[0].nextval);
    return padStart(count.toString(), 5, '0');
  }
}
