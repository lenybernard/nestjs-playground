import { NestFactory } from '@nestjs/core';
import { GraphQLSchemaBuilderModule, GraphQLSchemaFactory } from '@nestjs/graphql';
import { printSchema } from 'graphql/utilities';
import { promises as fs } from 'fs';
import * as path from 'node:path';
import { AuthorsResolver } from './todo-item/author.resolver';

async function generateSchema() {
  const app = await NestFactory.create(GraphQLSchemaBuilderModule);
  await app.init();

  const gqlSchemaFactory = app.get(GraphQLSchemaFactory);
  const schema = await gqlSchemaFactory.create([AuthorsResolver]);
  const distDir = path.join(__dirname, '../dist/');

  await fs.mkdir(distDir, { recursive: true });
  await fs.writeFile(path.join(distDir, 'schema.graphql'), printSchema(schema));
}

void generateSchema();
