import { RecipesService } from './recipes.service';
import { CreateRecipeDto } from './dto/create-recipe.dto';
import { UpdateRecipeDto } from './dto/update-recipe.dto';
export declare class RecipesController {
    private readonly recipesService;
    constructor(recipesService: RecipesService);
    create(user: any, createRecipeDto: CreateRecipeDto): Promise<{
        id: string;
        description: string | null;
        title: string;
        ingredients: string;
        userId: string;
    }>;
    findAll(user: any): Promise<{
        id: string;
        description: string | null;
        title: string;
        ingredients: string;
        userId: string;
    }[]>;
    findOne(user: any, id: string): Promise<{
        id: string;
        description: string | null;
        title: string;
        ingredients: string;
        userId: string;
    }>;
    update(user: any, id: string, updateRecipeDto: UpdateRecipeDto): Promise<{
        id: string;
        description: string | null;
        title: string;
        ingredients: string;
        userId: string;
    }>;
    remove(user: any, id: string): Promise<{
        id: string;
        description: string | null;
        title: string;
        ingredients: string;
        userId: string;
    }>;
}
