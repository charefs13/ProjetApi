// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { ConfigService } from '@nestjs/config';
// import { Request } from 'express';
// import { UsersService } from '../../users/users.service';
// import * as bcrypt from 'bcrypt';

// /**
//  * Stratégie JWT pour les refresh tokens via cookie HttpOnly.
//  *
//  * Objectif :
//  * 1️⃣ Récupérer le refresh token envoyé par le client dans un cookie HttpOnly nommé "Refresh".
//  * 2️⃣ Vérifier que ce token correspond au hash stocké en base.
//  * 3️⃣ Injecter le payload décodé si tout est OK, sinon lever une exception.
//  */
// @Injectable()
// export class JwtRefreshStrategy extends PassportStrategy(
//   Strategy,
//   'jwt-refresh', // Nom unique pour différencier la stratégie Jwt classique
// ) {
//   constructor(
//     private config: ConfigService,
//     private usersService: UsersService, // pour vérifier le token en DB
//   ) {
//     const refreshSecret = config.get<string>('JWT_REFRESH_SECRET');
//     if (!refreshSecret) {
//       throw new Error('JWT_REFRESH_SECRET must be defined in .env');
//     }

//     super({
//       // Extraction du JWT depuis le cookie HttpOnly "Refresh"
//       jwtFromRequest: ExtractJwt.fromExtractors([
//         (req: Request) => req?.cookies?.Refresh, // on récupère le token côté client
//       ]),
//       secretOrKey: refreshSecret, // clé secrète pour vérifier le token
//       passReqToCallback: true,    // on passe la requête complète à validate
//     });
//   }

//   /**
//    * Cette méthode est appelée après vérification de la signature et de l'expiration du JWT.
//    * Ici, on compare le refresh token reçu avec le hash en base.
//    *
//    * @param req - objet request contenant le cookie Refresh
//    * @param payload - contenu décodé du refresh token (sub, email, role)
//    * @returns objet user simplifié injecté dans @GetUser() ou req.user
//    */
//   async validate(req: Request, payload: any) {
//     const refreshToken = req.cookies?.Refresh; // récupère le token depuis le cookie
//     if (!refreshToken) throw new UnauthorizedException('Refresh token manquant');

//     // Récupération de l'utilisateur depuis la DB
//     const user = await this.usersService.findById(payload.sub);
//     if (!user || !user.refreshToken) {
//       throw new UnauthorizedException('Utilisateur non trouvé ou refresh token absent');
//     }

//     // Comparaison du token reçu avec le hash stocké
//     const tokenMatches = await bcrypt.compare(refreshToken, user.refreshToken);
//     if (!tokenMatches) throw new UnauthorizedException('Refresh token invalide');

//     // Tout est OK → renvoi des informations utilisateur pour injection via @GetUser()
//     return {
//       id: payload.sub,
//       email: payload.email,
//       role: payload.role,
//     };
//   }
// }
// /jwt-refresh.strategy.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';
import { Request } from 'express';
import { UsersService } from '../../users/users.service';
import * as bcrypt from 'bcrypt';

/**
 * Stratégie JWT pour le refresh token
 * - Le token doit être envoyé dans le header "x-refresh-token"
 */
@Injectable()
export class JwtRefreshStrategy extends PassportStrategy(Strategy, 'jwt-refresh') {
  constructor(
    private config: ConfigService,
    private usersService: UsersService,
  ) {
    const refreshSecret = config.get<string>('JWT_REFRESH_SECRET');
    if (!refreshSecret) throw new Error('JWT_REFRESH_SECRET must be defined in .env');

    super({
      jwtFromRequest: ExtractJwt.fromHeader('x-refresh-token'), // header x-refresh-token
      secretOrKey: refreshSecret,
      passReqToCallback: true,
    });
  }

  async validate(req: Request, payload: any) {
    const refreshToken = req.headers['x-refresh-token'] as string;
    if (!refreshToken) throw new UnauthorizedException('Refresh token manquant');

    const user = await this.usersService.findById(payload.sub);
    if (!user || !user.refreshToken) throw new UnauthorizedException('Utilisateur non trouvé ou refresh token absent');

    const tokenMatches = await bcrypt.compare(refreshToken, user.refreshToken);
    if (!tokenMatches) throw new UnauthorizedException('Refresh token invalide');

    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }
}
