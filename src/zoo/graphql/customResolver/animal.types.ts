import { PagingStrategies, QueryArgsType } from '@ptc-org/nestjs-query-graphql';
import { ArgsType } from '@nestjs/graphql';
import { AnimalDTO } from '../dto/animal.dto';

@ArgsType()
export class AnimalQuery extends QueryArgsType<AnimalDTO>(AnimalDTO, {
  enableTotalCount: true,
  pagingStrategy: PagingStrategies.CURSOR,
}) {}
export const AnimalConnection = AnimalQuery.ConnectionType;
