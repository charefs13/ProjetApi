"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesService = void 0;
const common_1 = require("@nestjs/common");
const prisma_service_1 = require("../prisma/prisma.service");
let RecipesService = class RecipesService {
    prisma;
    constructor(prisma) {
        this.prisma = prisma;
    }
    async create(userId, createRecipeDto) {
        console.log("USER ID RECU  :", userId);
        console.log("DTO RECU      :", createRecipeDto);
        return this.prisma.recipe.create({
            data: {
                ...createRecipeDto,
                userId,
            },
        });
    }
    async findAll(userId) {
        return this.prisma.recipe.findMany({
            where: { userId },
        });
    }
    async findOne(userId, id) {
        const recipe = await this.prisma.recipe.findUnique({ where: { id } });
        if (!recipe)
            throw new common_1.NotFoundException('Recette non trouvée');
        if (recipe.userId !== userId)
            throw new common_1.ForbiddenException('Accès refusé');
        return recipe;
    }
    async update(userId, id, updateRecipeDto) {
        const recipe = await this.findOne(userId, id);
        return this.prisma.recipe.update({
            where: { id },
            data: updateRecipeDto,
        });
    }
    async remove(userId, id) {
        const recipe = await this.findOne(userId, id);
        return this.prisma.recipe.delete({
            where: { id },
        });
    }
};
exports.RecipesService = RecipesService;
exports.RecipesService = RecipesService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [prisma_service_1.PrismaService])
], RecipesService);
//# sourceMappingURL=recipes.service.js.map