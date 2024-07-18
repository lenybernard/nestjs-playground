import { Args, Int, Query, Resolver } from '@nestjs/graphql';
import { AuthorDTO } from './author.dto';

@Resolver(() => AuthorDTO)
export class AuthorsResolver {
  @Query(() => AuthorDTO)
  async author(@Args('id', { type: () => Int }) id: number) {
    return { id, name: 'Author ' + id };
  }
}
