// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // 1️⃣ Version globale de l'API
  // Toutes les routes commenceront par /api/v1
  app.setGlobalPrefix('api/v1');

  // 2️⃣ Validation globale des DTOs
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // 3️⃣ Configuration Swagger
  const config = new DocumentBuilder()
    .setTitle('Median API')
    .setDescription('Documentation de l’API Median')
    .setVersion('1.0')
    .addBearerAuth({
      type: 'http',
      scheme: 'bearer',
      bearerFormat: 'JWT',
      name: 'Authorization',
      in: 'header',
    })
    // ⚠️ On ne met **pas** de /api/v1 ici pour éviter le double prefix
    .build();

  // 4️⃣ Création du document Swagger
  const document = SwaggerModule.createDocument(app, config);

  // 5️⃣ Setup Swagger
  // Swagger sera accessible sur http://localhost:3000/api
  // Toutes les routes documentées commenceront automatiquement par /api/v1 grâce au setGlobalPrefix
  SwaggerModule.setup('api', app, document);

  // 6️⃣ Lancement du serveur
  await app.listen(3000);
}
bootstrap();
