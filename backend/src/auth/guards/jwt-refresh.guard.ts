import { Injectable } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

/**
 * Guard pour protéger les routes nécessitant un refresh token valide
 * 
 * Utilise la stratégie 'jwt-refresh' définie dans JwtRefreshStrategy
 */
@Injectable()
export class JwtRefreshGuard extends AuthGuard('jwt-refresh') {}
