// src/main.ts

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // 1️⃣ Création de l'application NestJS
  const app = await NestFactory.create(AppModule);

  // 2️⃣ Activation des validations globales pour tous les DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,            // Supprime automatiquement les propriétés non déclarées dans les DTO
      forbidNonWhitelisted: true, // Renvoie une erreur si des propriétés inconnues sont envoyées
      transform: true,            // Transforme automatiquement les types (ex: string -> number si DTO le demande)
    }),
  );

  // 3️⃣ Configuration Swagger (documentation API)
  // - Ici on définit titre, description, version et auth JWT
  const config = new DocumentBuilder()
    .setTitle('Median')                                  // Titre affiché dans Swagger UI
    .setDescription('The Median API description')       // Description générale
    .setVersion('0.1')                                  // Version de l’API
    // 🔑 Ajouter l’authentification Bearer pour Swagger (bouton "Authorize")
    .addBearerAuth({
      type: 'http',         // Type HTTP auth
      scheme: 'bearer',     // Schéma Bearer
      bearerFormat: 'JWT',  // Format du token
      in: 'header',         // Passe le token dans le header Authorization
    }, 'access-token')      // Nom du schéma (utilisé dans @ApiBearerAuth('access-token'))
    .build();

  // 4️⃣ Génération de la documentation Swagger à partir de la config
  const document = SwaggerModule.createDocument(app, config);

  // 5️⃣ Route où Swagger sera accessible
  // → Ex: http://localhost:3000/api
  SwaggerModule.setup('api', app, document);

  // 6️⃣ Lancement du serveur sur le port 3000
  await app.listen(3000);
}
bootstrap();
