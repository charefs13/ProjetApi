// src/users/entities/user.entity.ts

import { ApiProperty } from '@nestjs/swagger';
import { Role } from '@prisma/client';

export class UserEntity {
  @ApiProperty({ example: '3fa85f64-5717-4562-b3fc-2c963f66afa6', description: 'ID unique de l’utilisateur (UUID)' })
  id: string;

  @ApiProperty({ example: 'test@example.com', description: 'Email de l’utilisateur' })
  email: string;

  @ApiProperty({ example: 'John', description: 'Prénom de l’utilisateur' })
  firstname: string;

  @ApiProperty({ example: 'Doe', description: 'Nom de famille de l’utilisateur' })
  lastname: string;

  @ApiProperty({ example: Role.USER, enum: Role, description: 'Rôle de l’utilisateur (USER ou ADMIN)' })
  role: Role;

  @ApiProperty({ example: '2025-12-01T12:00:00.000Z', description: 'Date de création' })
  createdAt: Date;

  @ApiProperty({ example: '2025-12-02T12:00:00.000Z', description: 'Date de mise à jour' })
  updatedAt: Date;
}
