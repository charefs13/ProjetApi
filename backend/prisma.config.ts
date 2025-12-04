import { defineConfig, env } from "prisma/config";
import 'dotenv/config';

export default defineConfig({
  schema: "prisma/schema.prisma",      // chemin du schema Prisma
  migrations: {
    path: "prisma/migrations",         // dossier des migrations
  },
  engine: "classic",                   // moteur Prisma
  datasource: {
    url: env("DATABASE_URL"),          // URL de connexion depuis .env
  },
});
