
// import { Module } from '@nestjs/common';
// import { AuthService } from './auth.service';
// import { AuthController } from './auth.controller';
// import { JwtModule } from '@nestjs/jwt';
// import { JwtStrategy } from './strategies/jwt.strategy';
// import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
// import { UsersModule } from '../users/users.module';
// import { ConfigModule, ConfigService } from '@nestjs/config';

// /**
//  * Module Auth
//  * - Contient le service et le contrôleur Auth
//  * - Configure JwtModule avec secret et durée de vie des tokens
//  */
// @Module({
//   imports: [
//     ConfigModule.forRoot({ isGlobal: true }), // Config globale
//     UsersModule, // Pour utiliser UsersService
//     JwtModule.registerAsync({
//       imports: [ConfigModule],
//       inject: [ConfigService],
//       useFactory: async (configService: ConfigService) => ({
//         secret: configService.get<string>('JWT_SECRET'),
//         signOptions: { expiresIn: '15m' },
//       }),
//     }),
//   ],
//   controllers: [AuthController],
//   providers: [AuthService, JwtStrategy, JwtRefreshStrategy],
//   exports: [AuthService],
// })
// export class AuthModule {}
// /auth.module.ts
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from './strategies/jwt.strategy';
import { JwtRefreshStrategy } from './strategies/jwt-refresh.strategy';
import { UsersModule } from '../users/users.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

/**
 * Module Auth
 * - Contient service, controller et stratégies
 */
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    UsersModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) => ({
        secret: configService.get<string>('JWT_SECRET'),
        signOptions: { expiresIn: '2m' },
      }),
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, JwtRefreshStrategy],
  exports: [AuthService],
})
export class AuthModule {}
