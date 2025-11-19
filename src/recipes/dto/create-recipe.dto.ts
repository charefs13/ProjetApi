// src/recipes/dto/create-recipe.dto.ts

import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateRecipeDto {
  // ---------- TITLE ----------
  @ApiProperty({
    description: 'Titre de la recette',
    example: 'Spaghetti Carbonara',
  })
  @IsString()        // doit être une string
  @IsNotEmpty()      // doit être rempli (non vide)
  title: string;     // correspond à Recipe.title dans Prisma

  // ---------- DESCRIPTION ----------
  @ApiProperty({
    description: 'Description de la recette',
    required: false,  // optionnel
  })
  @IsOptional()       // champs non obligatoire
  @IsString()         // si fourni, doit être une string
  description?: string; // correspond à Recipe.description dans Prisma

  // ---------- INGREDIENTS ----------
  @ApiProperty({
    description: 'Liste des ingrédients',
  })
  @IsString()
  @IsNotEmpty()
  ingredients: string; // correspond à Recipe.ingredients dans Prisma

  // ---------- USER ID ----------
  @ApiProperty({
    description: 'ID de l’utilisateur créateur',
  })
  @IsString()
  @IsNotEmpty()
  userId: string;      // correspond à Recipe.userId dans Prisma
}

