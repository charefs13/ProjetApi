
import { IsEmail, IsEnum, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

/**
 * DTO pour l'inscription d'un utilisateur.
 * Permet de définir les propriétés attendues pour la route /auth/register.
 * @ApiProperty sert à Swagger pour générer le formulaire automatiquement.
 */
export class RegisterDto {
  @ApiProperty({ example: 'user@example.com', description: 'Adresse email de l’utilisateur' })
  @IsEmail() // Validation email
  email: string;

  @ApiProperty({ example: 'Password123!', description: 'Mot de passe de l’utilisateur (minimum 6 caractères).' })
  @IsString() // Validation string
  password: string;

  @ApiProperty({ example: 'John', description: 'Prénom de l’utilisateur' })
  @IsString()
  firstname: string;

  @ApiProperty({ example: 'Doe', description: 'Nom de famille de l’utilisateur' })
  @IsString()
  lastname: string;

  @ApiProperty({ description: "Rôle de l'utilisateur", required: false, enum: Role })
  @IsOptional() // Champ non obligatoire
  @IsEnum(Role) // Si fourni, doit être une valeur de l'enum Role
  role?: Role = Role.USER; // Valeur par défaut
}
