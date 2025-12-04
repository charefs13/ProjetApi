
import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

/**
 * DTO pour la connexion d'un utilisateur.
 * Utilisé par la route /auth/login.
 */
export class LoginDto {
  @ApiProperty({ example: 'user@example.com', description: 'Adresse email de l’utilisateur' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password123!', description: 'Mot de passe de l’utilisateur' })
  @IsString()
  password: string;
}
  