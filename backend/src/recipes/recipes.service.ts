import { Injectable, ForbiddenException, NotFoundException } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  /**
   * Crée une nouvelle recette pour l'utilisateur connecté
   * @param userId - ID de l'utilisateur connecté
   * @param createRecipeDto - données de la recette à créer
   */
async create(userId: string, createRecipeDto: CreateRecipeDto) {
  console.log("USER ID RECU  :", userId);
  console.log("DTO RECU      :", createRecipeDto);

  return this.prisma.recipe.create({
    data: {
      ...createRecipeDto,
      userId,
    },
  });
}


  /**
   * Retourne toutes les recettes de l'utilisateur connecté
   * @param userId - ID de l'utilisateur connecté
   */
  async findAll(userId: string) {
    return this.prisma.recipe.findMany({
      where: { userId }, // filtre pour ne retourner que ses propres recettes
    });
  }

  /**
   * Retourne une recette spécifique si l'utilisateur en est le propriétaire
   * @param userId - ID de l'utilisateur connecté
   * @param id - ID de la recette
   */
  async findOne(userId: string, id: string) {
    const recipe = await this.prisma.recipe.findUnique({ where: { id } });
    if (!recipe) throw new NotFoundException('Recette non trouvée'); // 404 si pas trouvée
    if (recipe.userId !== userId) throw new ForbiddenException('Accès refusé'); // 403 si pas propriétaire
    return recipe;
  }

  /**
   * Met à jour une recette si l'utilisateur en est le propriétaire
   * @param userId - ID de l'utilisateur connecté
   * @param id - ID de la recette
   * @param updateRecipeDto - données à mettre à jour
   */
  async update(userId: string, id: string, updateRecipeDto: UpdateRecipeDto) {
    const recipe = await this.findOne(userId, id); // vérifie que l'utilisateur peut modifier
    return this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto,
    });
  }

  /**
   * Supprime une recette si l'utilisateur en est le propriétaire
   * @param userId - ID de l'utilisateur connecté
   * @param id - ID de la recette
   */
  async remove(userId: string, id: string) {
    const recipe = await this.findOne(userId, id); // vérifie que l'utilisateur peut supprimer
    return this.prisma.recipe.delete({
      where: { id },
    });
  }
}
