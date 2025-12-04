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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecipesController = void 0;
const common_1 = require("@nestjs/common");
const recipes_service_1 = require("./recipes.service");
const create_recipe_dto_1 = require("./dto/create-recipe.dto");
const update_recipe_dto_1 = require("./dto/update-recipe.dto");
const jwt_auth_guard_1 = require("../auth/guards/jwt-auth.guard");
const get_user_decorator_1 = require("../auth/decorators/get-user.decorator");
const swagger_1 = require("@nestjs/swagger");
const recipe_entity_1 = require("./entities/recipe.entity");
let RecipesController = class RecipesController {
    recipesService;
    constructor(recipesService) {
        this.recipesService = recipesService;
    }
    create(user, createRecipeDto) {
        return this.recipesService.create(user.id, createRecipeDto);
    }
    findAll(user) {
        return this.recipesService.findAll(user.id);
    }
    findOne(user, id) {
        return this.recipesService.findOne(user.id, id);
    }
    update(user, id, updateRecipeDto) {
        return this.recipesService.update(user.id, id, updateRecipeDto);
    }
    remove(user, id) {
        return this.recipesService.remove(user.id, id);
    }
};
exports.RecipesController = RecipesController;
__decorate([
    (0, common_1.Post)(),
    (0, swagger_1.ApiOperation)({ summary: 'Créer une recette (utilisateur connecté)' }),
    (0, swagger_1.ApiCreatedResponse)({ description: 'Recette créée avec succès.', type: recipe_entity_1.RecipeEntity }),
    (0, swagger_1.ApiForbiddenResponse)({ description: "Accès refusé si token invalide" }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, create_recipe_dto_1.CreateRecipeDto]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    (0, swagger_1.ApiOperation)({ summary: 'Lister toutes les recettes de l’utilisateur connecté' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Liste des recettes', type: [recipe_entity_1.RecipeEntity] }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Obtenir une recette par ID (propriétaire seulement)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Recette trouvée', type: recipe_entity_1.RecipeEntity }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Accès refusé si pas propriétaire.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Recette non trouvée.' }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, swagger_1.ApiOperation)({ summary: 'Mettre à jour une recette (propriétaire seulement)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Recette mise à jour avec succès', type: recipe_entity_1.RecipeEntity }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Accès refusé si pas propriétaire.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Recette non trouvée.' }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('id')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String, update_recipe_dto_1.UpdateRecipeDto]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.NO_CONTENT),
    (0, swagger_1.ApiOperation)({ summary: 'Supprimer une recette (propriétaire seulement)' }),
    (0, swagger_1.ApiOkResponse)({ description: 'Recette supprimée avec succès' }),
    (0, swagger_1.ApiForbiddenResponse)({ description: 'Accès refusé si pas propriétaire.' }),
    (0, swagger_1.ApiNotFoundResponse)({ description: 'Recette non trouvée.' }),
    __param(0, (0, get_user_decorator_1.GetUser)()),
    __param(1, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, String]),
    __metadata("design:returntype", void 0)
], RecipesController.prototype, "remove", null);
exports.RecipesController = RecipesController = __decorate([
    (0, swagger_1.ApiTags)('recipes'),
    (0, swagger_1.ApiBearerAuth)('access-token'),
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Controller)('recipes'),
    __metadata("design:paramtypes", [recipes_service_1.RecipesService])
], RecipesController);
//# sourceMappingURL=recipes.controller.js.map