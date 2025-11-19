import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) { }

  // Crud Operations

  // Create
  create(createRecipeDto: CreateRecipeDto) {
    return this.prisma.recipe.create({ data: createRecipeDto })

  }

  // Read all
  findAll() {
    return this.prisma.recipe.findMany();

  }

  // Read one
  findOne(id: string) {
    return this.prisma.recipe.findUnique({
      where: { id },
    });
  }

  // Update
  update(id: string, updateRecipeDto: UpdateRecipeDto) {
    return this.prisma.recipe.update({
      where: { id },
      data: updateRecipeDto
    });
  }


  // Delete
  remove(id: string) {
    return this.prisma.recipe.delete({ where: { id } })
  }
}
