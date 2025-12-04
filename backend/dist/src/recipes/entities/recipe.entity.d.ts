import { Recipe } from '@prisma/client';
export declare class RecipeEntity implements Recipe {
    id: string;
    title: string;
    description: string | null;
    ingredients: string;
    userId: string;
    user?: any;
    createdAt: Date;
    updatedAt: Date;
}
