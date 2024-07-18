import { IsBoolean, IsString } from 'class-validator';
import { Field, InputType } from '@nestjs/graphql';

@InputType('CreateTodoItem')
export class TodoItemCreateDTO {
  @IsString()
  @Field()
  title!: string;

  @IsBoolean()
  @Field()
  completed!: boolean;
}
