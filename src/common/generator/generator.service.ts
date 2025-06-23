/*
Author: Wilson Joseph Hinacay
Reference: Spring Generator by Albert Oclarit
User: JOEM
Date: Febuary 2, 2023
*/

import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { padStart, split } from 'lodash';

export enum GeneratorType {
  CASE_NO = 'CASE_NO',
  BILL_NO = 'BILL_NO',
}

interface COUNT {
  result: number;
}

interface NEXTVAL {
  nextval: number;
}

@Injectable()
export class GeneratorService {
  constructor(private prisma: PrismaService) {}

  initGenerator = async (type: GeneratorType) => {
    const name: string = type.toLowerCase();
    const payload = `${name}_gen`;
    const count: COUNT[] = await this.prisma.$queryRawUnsafe(
      `SELECT count(*) as result FROM pg_class where relkind='S' and relname = $1`,
      payload,
    );

    if (!count[0].result) {
      // console.log("if", count[0].result)
      try {
        await this.prisma.$executeRawUnsafe(
          `CREATE SEQUENCE ${payload} INCREMENT 1  MINVALUE 1 START 1`,
        );
      } catch (error) {
        console.log('Error: ', error);
      }
    }
  };

  getNextValue = async (type: GeneratorType): Promise<string> => {
    await this.initGenerator(type);
    const name = type.toLowerCase();
    const payload = `${name}_gen`;
    const nextVal: NEXTVAL[] = await this.prisma.$queryRawUnsafe(
      `SELECT nextval($1)`,
      payload,
    );
    const count = Number(nextVal[0].nextval);
    return padStart(count.toString(), 7, '0');
  };
}
