// src/users/users.controller.ts

import { Controller, Get, Patch, Param, Delete, Body, UseGuards, ForbiddenException, HttpCode, HttpStatus } from '@nestjs/common';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../auth/decorators/get-user.decorator';
import { Role } from '@prisma/client';
import { UserEntity } from './entities/user.entity'; // Classe UserEntity pour Swagger

@ApiTags('users')
@ApiBearerAuth('access-token') // Permet le bouton "Authorize" dans Swagger
@UseGuards(JwtAuthGuard) // Toutes les routes nécessitent un JWT valide
@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Retourne tous les utilisateurs (admin uniquement)
   */
  @Get()
  @ApiOperation({ summary: 'Lister tous les utilisateurs (admin only)' })
  @ApiResponse({ status: 200, description: 'Liste des utilisateurs', type: [UserEntity] })
  @ApiResponse({ status: 403, description: 'Accès réservé aux admins' })
  async findAll(@GetUser() user) {
    if (user.role !== Role.ADMIN) {
      throw new ForbiddenException('Accès réservé aux admins');
    }
    return this.usersService.findAll();
  }

  /**
   * Retourne un utilisateur spécifique par ID (admin uniquement)
   */
  @Get(':id')
  @ApiOperation({ summary: 'Obtenir un utilisateur par ID (admin only)' })
  @ApiResponse({ status: 200, description: 'Utilisateur trouvé', type: UserEntity })
  @ApiResponse({ status: 403, description: 'Accès réservé aux admins' })
  @ApiResponse({ status: 404, description: 'Utilisateur non trouvé' })
  async findOne(@GetUser() user, @Param('id') id: string) {
    if (user.role !== Role.ADMIN) {
      throw new ForbiddenException('Accès réservé aux admins');
    }
    return this.usersService.findOne(id);
  }

  /**
   * Met à jour un utilisateur (admin uniquement)
   */
  @Patch(':id')
  @ApiOperation({ summary: 'Mettre à jour un utilisateur (admin only)' })
  @ApiResponse({ status: 200, description: 'Utilisateur mis à jour', type: UserEntity })
  @ApiResponse({ status: 400, description: 'Données invalides' })
  @ApiResponse({ status: 403, description: 'Accès réservé aux admins' })
  async update(@GetUser() user, @Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    if (user.role !== Role.ADMIN) {
      throw new ForbiddenException('Accès réservé aux admins');
    }
    return this.usersService.update(id, updateUserDto);
  }

  /**
   * Supprime un utilisateur (admin uniquement)
   */
  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT) // 204 No Content si succès
  @ApiOperation({ summary: 'Supprimer un utilisateur (admin only)' })
  @ApiResponse({ status: 204, description: 'Utilisateur supprimé' })
  @ApiResponse({ status: 403, description: 'Accès réservé aux admins' })
  @ApiResponse({ status: 404, description: 'Utilisateur non trouvé' })
  async remove(@GetUser() user, @Param('id') id: string) {
    if (user.role !== Role.ADMIN) {
      throw new ForbiddenException('Accès réservé aux admins');
    }
    await this.usersService.remove(id);
  }
}
