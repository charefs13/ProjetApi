import { Recipe } from '@prisma/client';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class RecipeEntity implements Recipe {
  @ApiProperty({
    description: 'Identifiant unique de la recette (UUID)',
    example: 'b1a2c3d4-e5f6-7890-ab12-cd34ef567890',
  })
  id: string;

  @ApiProperty({
    description: 'Titre de la recette',
    example: 'Pâtes à la carbonara',
  })
  title: string;

  @ApiPropertyOptional({
    description: 'Description de la recette',
    example: 'Une recette italienne classique',
    nullable: true,
  })
  description: string | null;

  @ApiProperty({
    description: 'Ingrédients de la recette (format texte)',
    example: 'Pâtes, œufs, pancetta, parmesan, poivre',
  })
  ingredients: string;

  @ApiProperty({
    description: 'ID de l’utilisateur propriétaire de la recette',
    example: 'aabbccdd-1122-3344-5566-77889900aabb',
  })
  userId: string;

  // ⚠️ Ne pas exposer l’objet user complet pour Swagger pour éviter les boucles
  user?: any;

  @ApiProperty({
    description: 'Date de création de la recette',
    example: '2025-12-01T12:00:00.000Z',
  })
  createdAt: Date;

  @ApiProperty({
    description: 'Date de mise à jour de la recette',
    example: '2025-12-02T12:00:00.000Z',
  })
  updatedAt: Date;
}
