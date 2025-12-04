import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
import { PrismaService } from 'src/prisma/prisma.service';
export declare class RecipesService {
    private prisma;
    constructor(prisma: PrismaService);
    create(userId: string, createRecipeDto: CreateRecipeDto): Promise<{
        id: string;
        description: string | null;
        title: string;
        ingredients: string;
        userId: string;
    }>;
    findAll(userId: string): Promise<{
        id: string;
        description: string | null;
        title: string;
        ingredients: string;
        userId: string;
    }[]>;
    findOne(userId: string, id: string): Promise<{
        id: string;
        description: string | null;
        title: string;
        ingredients: string;
        userId: string;
    }>;
    update(userId: string, id: string, updateRecipeDto: UpdateRecipeDto): Promise<{
        id: string;
        description: string | null;
        title: string;
        ingredients: string;
        userId: string;
    }>;
    remove(userId: string, id: string): Promise<{
        id: string;
        description: string | null;
        title: string;
        ingredients: string;
        userId: string;
    }>;
}
