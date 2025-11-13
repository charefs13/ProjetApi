/*
  Warnings:

  - You are about to drop the `Ingredient` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `ingredients` to the `Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_recipeId_fkey";

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "ingredients" TEXT NOT NULL;

-- DropTable
DROP TABLE "Ingredient";
