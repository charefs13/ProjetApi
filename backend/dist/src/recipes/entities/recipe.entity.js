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
exports.RecipeEntity = void 0;
const swagger_1 = require("@nestjs/swagger");
class RecipeEntity {
    id;
    title;
    description;
    ingredients;
    userId;
    user;
    createdAt;
    updatedAt;
}
exports.RecipeEntity = RecipeEntity;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Identifiant unique de la recette (UUID)',
        example: 'b1a2c3d4-e5f6-7890-ab12-cd34ef567890',
    }),
    __metadata("design:type", String)
], RecipeEntity.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Titre de la recette',
        example: 'Pâtes à la carbonara',
    }),
    __metadata("design:type", String)
], RecipeEntity.prototype, "title", void 0);
__decorate([
    (0, swagger_1.ApiPropertyOptional)({
        description: 'Description de la recette',
        example: 'Une recette italienne classique',
        nullable: true,
    }),
    __metadata("design:type", Object)
], RecipeEntity.prototype, "description", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Ingrédients de la recette (format texte)',
        example: 'Pâtes, œufs, pancetta, parmesan, poivre',
    }),
    __metadata("design:type", String)
], RecipeEntity.prototype, "ingredients", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'ID de l’utilisateur propriétaire de la recette',
        example: 'aabbccdd-1122-3344-5566-77889900aabb',
    }),
    __metadata("design:type", String)
], RecipeEntity.prototype, "userId", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date de création de la recette',
        example: '2025-12-01T12:00:00.000Z',
    }),
    __metadata("design:type", Date)
], RecipeEntity.prototype, "createdAt", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Date de mise à jour de la recette',
        example: '2025-12-02T12:00:00.000Z',
    }),
    __metadata("design:type", Date)
], RecipeEntity.prototype, "updatedAt", void 0);
//# sourceMappingURL=recipe.entity.js.map