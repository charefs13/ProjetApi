// src/recipes/recipes.controller.ts

import { Controller, Get, Post, Patch, Delete, Body, Param, UseGuards, HttpCode, HttpStatus } from '@nestjs/common';
import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { ApiTags, ApiBearerAuth, ApiOperation, ApiCreatedResponse, ApiOkResponse, ApiForbiddenResponse, ApiNotFoundResponse } from '@nestjs/swagger';
import { RecipeEntity } from './entities/recipe.entity'; // Classe pour Swagger

@ApiTags('recipes')
@ApiBearerAuth('access-token') // Doit correspondre à main.ts pour Swagger
@UseGuards(JwtAuthGuard)
@Controller('recipes')
export class RecipesController {
  constructor(private readonly recipesService: RecipesService) {}

  /**
   * Crée une recette pour l'utilisateur connecté
   */
  @Post()
  @ApiOperation({ summary: 'Créer une recette (utilisateur connecté)' })
  @ApiCreatedResponse({ description: 'Recette créée avec succès.', type: RecipeEntity })
  @ApiForbiddenResponse({ description: "Accès refusé si token invalide" })
  create(@GetUser() user, @Body() createRecipeDto: CreateRecipeDto) {
    return this.recipesService.create(user.id, createRecipeDto);
  }

  /**
   * Récupère toutes les recettes de l'utilisateur connecté
   */
  @Get()
  @ApiOperation({ summary: 'Lister toutes les recettes de l’utilisateur connecté' })
  @ApiOkResponse({ description: 'Liste des recettes', type: [RecipeEntity] })
  findAll(@GetUser() user) {
    return this.recipesService.findAll(user.id);
  }

  /**
   * Récupère une recette spécifique si l'utilisateur en est le propriétaire
   */
  @Get(':id')
  @ApiOperation({ summary: 'Obtenir une recette par ID (propriétaire seulement)' })
  @ApiOkResponse({ description: 'Recette trouvée', type: RecipeEntity })
  @ApiForbiddenResponse({ description: 'Accès refusé si pas propriétaire.' })
  @ApiNotFoundResponse({ description: 'Recette non trouvée.' })
  findOne(@GetUser() user, @Param('id') id: string) {
    return this.recipesService.findOne(user.id, id);
  }

  /**
   * Met à jour une recette si l'utilisateur en est le propriétaire
   */
  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour une recette (propriétaire seulement)' })
  @ApiOkResponse({ description: 'Recette mise à jour avec succès', type: RecipeEntity })
  @ApiForbiddenResponse({ description: 'Accès refusé si pas propriétaire.' })
  @ApiNotFoundResponse({ description: 'Recette non trouvée.' })
  update(@GetUser() user, @Param('id') id: string, @Body() updateRecipeDto: UpdateRecipeDto) {
    return this.recipesService.update(user.id, id, updateRecipeDto);
  }

  /**
   * Supprime une recette si l'utilisateur en est le propriétaire
   */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content
  @ApiOperation({ summary: 'Supprimer une recette (propriétaire seulement)' })
  @ApiOkResponse({ description: 'Recette supprimée avec succès' })
  @ApiForbiddenResponse({ description: 'Accès refusé si pas propriétaire.' })
  @ApiNotFoundResponse({ description: 'Recette non trouvée.' })
  remove(@GetUser() user, @Param('id') id: string) {
    return this.recipesService.remove(user.id, id);
  }
}
