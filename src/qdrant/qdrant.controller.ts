import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Param,
  Query,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import {
  QdrantService,
  QdrantPoint,
  SearchParams,
  CreateCollectionParams,
} from './qdrant.service';
import { Public } from 'src/common/decorator/public.decorator';

export class CreateCollectionDto {
  name: string;
  size: number;
  distance?: 'Cosine' | 'Euclid' | 'Dot';
}

export class UpsertPointsDto {
  points: QdrantPoint[];
}

export class SearchDto {
  vector: number[];
  limit?: number;
  filter?: any;
  with_payload?: boolean;
  with_vector?: boolean;
}

export class CreateIndexDto {
  field_name: string;
  field_schema?: 'keyword' | 'integer' | 'float' | 'geo' | 'text' | 'bool';
}


@Controller('qdrant')
export class QdrantController {
  constructor(private readonly qdrantService: QdrantService) {}


  @Get('collections')
  async getCollections() {
    try {
      return await this.qdrantService.getCollections();
    } catch (error) {
      throw new HttpException(
        'Failed to get collections',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('collections')
  async createCollection(@Body() createCollectionDto: CreateCollectionDto) {
    try {
      const { name, ...params } = createCollectionDto;
      return await this.qdrantService.createCollection(name, params);
    } catch (error) {
      throw new HttpException(
        `Failed to create collection: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }


  @Get('collections/:name')
  async getCollectionInfo(@Param('name') name: string) {
    try {
      return await this.qdrantService.getCollectionInfo(name);
    } catch (error) {
      throw new HttpException(
        `Failed to get collection info: ${error.message}`,
        HttpStatus.NOT_FOUND,
      );
    }
  }

  @Delete('collections/:name')
  async deleteCollection(@Param('name') name: string) {
    try {
      return await this.qdrantService.deleteCollection(name);
    } catch (error) {
      throw new HttpException(
        `Failed to delete collection: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('collections/:name/points')
  async upsertPoints(
    @Param('name') collectionName: string,
    @Body() upsertPointsDto: UpsertPointsDto,
  ) {
    try {
      return await this.qdrantService.upsertPoints(
        collectionName,
        upsertPointsDto.points,
      );
    } catch (error) {
      throw new HttpException(
        `Failed to upsert points: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('collections/:name/search')
  async searchPoints(
    @Param('name') collectionName: string,
    @Body() searchDto: SearchDto,
  ) {
    try {
      return await this.qdrantService.search(collectionName, searchDto);
    } catch (error) {
      throw new HttpException(
        `Failed to search points: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('collections/:name/query')
  async queryPoints(
    @Param('name') collectionName: string,
    @Body() searchDto: SearchDto,
  ) {
    try {
      return await this.qdrantService.query(collectionName, searchDto);
    } catch (error) {
      throw new HttpException(
        `Failed to query points: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('collections/:name/points')
  async retrievePoints(
    @Param('name') collectionName: string,
    @Query('ids') ids: string,
  ) {
    try {
      const pointIds = ids
        .split(',')
        .map((id) => (isNaN(Number(id)) ? id : Number(id)));
      return await this.qdrantService.retrievePoints(collectionName, pointIds);
    } catch (error) {
      throw new HttpException(
        `Failed to retrieve points: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Delete('collections/:name/points')
  async deletePoints(
    @Param('name') collectionName: string,
    @Query('ids') ids: string,
  ) {
    try {
      const pointIds = ids
        .split(',')
        .map((id) => (isNaN(Number(id)) ? id : Number(id)));
      return await this.qdrantService.deletePoints(collectionName, pointIds);
    } catch (error) {
      throw new HttpException(
        `Failed to delete points: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('collections/:name/index')
  async createPayloadIndex(
    @Param('name') collectionName: string,
    @Body() createIndexDto: CreateIndexDto,
  ) {
    try {
      return await this.qdrantService.createPayloadIndex(
        collectionName,
        createIndexDto.field_name,
        createIndexDto.field_schema,
      );
    } catch (error) {
      throw new HttpException(
        `Failed to create payload index: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('collections/:name/count')
  async countPoints(
    @Param('name') collectionName: string,
    @Body() filter?: any,
  ) {
    try {
      return await this.qdrantService.countPoints(collectionName, filter);
    } catch (error) {
      throw new HttpException(
        `Failed to count points: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('collections/:name/scroll')
  async scrollPoints(
    @Param('name') collectionName: string,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
    @Body() filter?: any,
  ) {
    try {
      return await this.qdrantService.scrollPoints(
        collectionName,
        filter,
        limit ? parseInt(limit) : 100,
        offset,
      );
    } catch (error) {
      throw new HttpException(
        `Failed to scroll points: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
