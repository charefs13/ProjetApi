// src/auth/auth.controller.ts

import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { ApiTags, ApiCreatedResponse, ApiOkResponse, ApiBadRequestResponse, ApiBearerAuth, ApiOperation } from '@nestjs/swagger';
import { JwtRefreshGuard } from './guards/jwt-refresh.guard';
import { GetUser } from './decorators/get-user.decorator';

class TokensResponse {
  accessToken: string;
  refreshToken: string;
}

@ApiTags('auth')
@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  /**
   * Inscription d'un utilisateur
   */
  @Post('register')
  @ApiOperation({ summary: 'Créer un nouvel utilisateur' })
  @ApiCreatedResponse({ description: 'Utilisateur créé avec succès.' })
  @ApiBadRequestResponse({ description: 'Données invalides.' })
  async register(@Body() dto: RegisterDto) {
    return this.authService.register(
      dto.email,
      dto.password,
      dto.firstname,
      dto.lastname,
      dto.role ?? undefined
    );
  }

  /**
   * Connexion d'un utilisateur
   */
  @Post('login')
  @ApiOperation({ summary: 'Connexion utilisateur et récupération des tokens' })
  @ApiOkResponse({ description: 'Connexion réussie, retourne access et refresh token.', type: TokensResponse })
  @ApiBadRequestResponse({ description: 'Email ou mot de passe invalide.' })
  async login(@Body() dto: LoginDto) {
    return this.authService.login(dto.email, dto.password);
  }

  /**
   * Refresh token
   * - Protégé par JwtRefreshGuard
   * - Le refresh token doit être envoyé dans le header "x-refresh-token"
   */
  @UseGuards(JwtRefreshGuard)
  @Post('refresh')
  @ApiBearerAuth('access-token') // Swagger affichera le bouton Authorize
  @ApiOperation({ summary: 'Renouvelle accessToken et refreshToken avec un refresh token valide' })
  @ApiOkResponse({ description: 'Renvoie de nouveaux tokens.', type: TokensResponse })
  async refresh(@GetUser() user) {
    const tokens = await this.authService.getTokens(user);
    await this.authService.updateRefreshToken(user.id, tokens.refreshToken);
    return tokens;
  }
}
