// import { Injectable } from '@nestjs/common';
// import { PassportStrategy } from '@nestjs/passport';
// import { ExtractJwt, Strategy } from 'passport-jwt';
// import { ConfigService } from '@nestjs/config';

// /**
//  * Stratégie JWT pour authentifier les utilisateurs via le token d'accès
//  */
// @Injectable()
// export class JwtStrategy extends PassportStrategy(Strategy) {
//   constructor(private config: ConfigService) {
//     // Récupération de la clé secrète depuis le .env
//     const jwtSecret = config.get<string>('JWT_SECRET');
//     if (!jwtSecret) {
//       throw new Error('JWT_SECRET must be defined in .env');
//     }

//     // Configuration de la stratégie
//     super({
//       // Extraire le token depuis le header Authorization Bearer
//       jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),

//       // Clé secrète utilisée pour vérifier le token
//       secretOrKey: jwtSecret,

//       // Ne pas ignorer l'expiration du token
//       ignoreExpiration: false,
//     });
//   }

//   /**
//    * Cette méthode est appelée après la vérification du token
//    * payload correspond au contenu du token signé (sub, email, role, etc.)
//    * Ce retour sera injecté dans @Request() ou @GetUser() via le guard
//    */
//   async validate(payload: any) {
//     return {
//       id: payload.sub,   // ID de l'utilisateur
//       email: payload.email,  // Email de l'utilisateur
//       role: payload.role,    // Rôle de l'utilisateur (USER | ADMIN)
//     };
//   }
// }

// /jwt.strategy.ts
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

/**
 * Stratégie JWT pour l'accès
 */
@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor(private config: ConfigService) {
    const jwtSecret = config.get<string>('JWT_SECRET');
    if (!jwtSecret) throw new Error('JWT_SECRET must be defined in .env');

    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: jwtSecret,
      ignoreExpiration: false,
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,
      email: payload.email,
      role: payload.role,
    };
  }
}
