import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  // 1. Création de l'application NestJS
  const app = await NestFactory.create(AppModule);

  // 2. Activation des validations globales (DTO)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // retire les propriétés non déclarées dans le DTO
      forbidNonWhitelisted: true, // renvoie une erreur si une propriété inconnue est envoyée
      transform: true, // transforme les types automatiquement si possible
    }),
  );

  // 3. Configuration de Swagger (documentation)
  const config = new DocumentBuilder()
    .setTitle('Median')               // Titre affiché sur Swagger
    .setDescription('The Median API description') // Description affichée
    .setVersion('0.1')                // Version de l’API
    .build();

  // 4. Génération de la documentation Swagger
  const document = SwaggerModule.createDocument(app, config);

  // 5. Route où Swagger sera accessible (http://localhost:3000/api)
  SwaggerModule.setup('api', app, document);

  // 6. Lancement du serveur NestJS
  await app.listen(3000);
}
bootstrap();
