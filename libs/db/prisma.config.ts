import { defineConfig } from '@prisma/config';

const { DB_USER, DB_PASSWORD, DB_PORT, DB_NAME, DATABASE_URL } = process.env;

const url =
  DATABASE_URL ||
  `postgresql://${DB_USER}:${DB_PASSWORD}@localhost:${DB_PORT}/${DB_NAME}?schema=public`;

export default defineConfig({
  schema: './prisma/schema.prisma',
  datasource: {
    url: url,
  },
});
