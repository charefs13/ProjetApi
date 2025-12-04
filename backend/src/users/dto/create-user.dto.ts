import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com', description: 'Adresse email de l’utilisateur' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'Password123!', description: 'Mot de passe de l’utilisateur (minimum 6 caractères.' })
  @IsString()
  password: string;

  @ApiProperty({ example: 'John', description: 'Prénom' })
  @IsString()
  firstname: string;

  @ApiProperty({ example: 'Doe', description: 'Nom de famille' })
  @IsString()
  lastname: string;
}
