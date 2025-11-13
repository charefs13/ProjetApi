import { Injectable } from '@nestjs/common';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class RecipesService {
  constructor(private prisma: PrismaService) {}

  // Crud Operations

  // Create
  create(createRecipeDto: CreateRecipeDto) {
    return 'This action adds a new recipe';
  }

  // Read all
  findAll() {
    return `This action returns all recipes`;
  }

  // Read one
  findOne(id: number) {
    return `This action returns a #${id} recipe`;
  }

  // Update
  update(id: number, updateRecipeDto: UpdateRecipeDto) {
    return `This action updates a #${id} recipe`;
  }

// Delete
  remove(id: number) {
    return `This action removes a #${id} recipe`;
  }
}
