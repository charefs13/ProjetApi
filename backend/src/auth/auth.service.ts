
// import { Injectable, UnauthorizedException } from '@nestjs/common';
// import { UsersService } from '../users/users.service';
// import { JwtService } from '@nestjs/jwt';
// import * as bcrypt from 'bcrypt';
// import { User, Role } from '@prisma/client';

// /**
//  * Service Auth pour gérer l'inscription, la connexion et les tokens.
//  */
// @Injectable()
// export class AuthService {
//   constructor(
//     private usersService: UsersService, // Service utilisateur pour manipuler la DB
//     private jwtService: JwtService,     // Service JWT pour générer tokens
//   ) {}

//   /**
//    * Inscription d'un utilisateur.
//    * - Hash le mot de passe
//    * - Crée l'utilisateur dans la base
//    * - Génère access & refresh token
//    */
//   async register(
//     email: string,
//     password: string,
//     firstname: string,
//     lastname: string,
//     role?: Role
//   ) {
//     // Hash du mot de passe avant stockage
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Création de l'utilisateur dans la base
//     const user = await this.usersService.create({
//       email,
//       password: hashedPassword,
//       firstname,
//       lastname,
//       role: role ?? Role.USER, // par défaut USER
//     });

//     // Génération des tokens
//     const tokens = await this.getTokens(user);

//     // Stockage du refresh token hashé dans la DB
//     await this.updateRefreshToken(user.id, tokens.refreshToken);

//     return tokens;
//   }

//   /**
//    * Connexion d'un utilisateur.
//    * Vérifie email et mot de passe.
//    * Retourne access & refresh token.
//    */
//   async login(email: string, password: string) {
//     const user = await this.usersService.findByEmail(email);
//     if (!user) throw new UnauthorizedException('Email ou mot de passe invalide');

//     const passwordMatches = await bcrypt.compare(password, user.password);
//     if (!passwordMatches) throw new UnauthorizedException('Email ou mot de passe invalide');

//     const tokens = await this.getTokens(user);
//     await this.updateRefreshToken(user.id, tokens.refreshToken);

//     return tokens;
//   }

//   /**
//    * Génération des tokens JWT
//    * - accessToken: courte durée (15min)
//    * - refreshToken: longue durée (7 jours)
//    */
//   async getTokens(user: User) {
//     const payload = { sub: user.id, email: user.email, role: user.role };
//     const accessToken = this.jwtService.sign(payload, { expiresIn: '2m' });
//     const refreshToken = this.jwtService.sign(payload, {secret: process.env.JWT_REFRESH_SECRET,expiresIn: '7d',
// });
//     return { accessToken, refreshToken };
//   }

//   /**
//    * Hash et stocke le refresh token dans la DB pour vérification future.
//    */
//   async updateRefreshToken(userId: string, refreshToken: string) {
//     const hashedToken = await bcrypt.hash(refreshToken, 10);
//     await this.usersService.updateRefreshToken(userId, hashedToken);
//   }
// }

// /auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { User, Role } from '@prisma/client';

/**
 * Service Auth pour gérer l'inscription, la connexion et les tokens.
 */
@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService,
  ) {}

  /**
   * Inscription d'un utilisateur.
   * Hash le mot de passe, crée l'utilisateur et génère tokens.
   */
  async register(
    email: string,
    password: string,
    firstname: string,
    lastname: string,
    role?: Role
  ) {
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = await this.usersService.create({
      email,
      password: hashedPassword,
      firstname,
      lastname,
      role: role ?? Role.USER,
    });

    const tokens = await this.getTokens(user);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  /**
   * Connexion d'un utilisateur.
   * Vérifie email et mot de passe, puis génère tokens.
   */
  async login(email: string, password: string) {
    const user = await this.usersService.findByEmail(email);
    if (!user) throw new UnauthorizedException('Email ou mot de passe invalide');

    const passwordMatches = await bcrypt.compare(password, user.password);
    if (!passwordMatches) throw new UnauthorizedException('Email ou mot de passe invalide');

    const tokens = await this.getTokens(user);
    await this.updateRefreshToken(user.id, tokens.refreshToken);

    return tokens;
  }

  /**
   * Génération des tokens JWT.
   * - accessToken : courte durée
   * - refreshToken : longue durée
   * Signés avec leurs clés respectives.
   */
  async getTokens(user: User) {
    const payload = { sub: user.id, email: user.email, role: user.role };

    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET,
      expiresIn: '2m',
    });

    const refreshToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_REFRESH_SECRET,
      expiresIn: '7d',
    });

    return { accessToken, refreshToken };
  }

  /**
   * Hash et stocke le refresh token dans la DB.
   */
  async updateRefreshToken(userId: string, refreshToken: string) {
    const hashedToken = await bcrypt.hash(refreshToken, 10);
    await this.usersService.updateRefreshToken(userId, hashedToken);
  }
}
