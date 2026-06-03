import "dotenv/config";

import { defineConfig, env } from "prisma/config"; // <-- Adicionado o 'env' aqui

export default defineConfig({
  schema: "prisma/schema.prisma",
  migrations: {
    path: "prisma/migrations",
  },
  datasource: {
    url: env("DATABASE_URL"), // <-- Alterado para o método nativo do Prisma
  },
});
