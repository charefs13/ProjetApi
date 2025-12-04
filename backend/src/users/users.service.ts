import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { User, Role } from '@prisma/client';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  /**
   * Crée un nouvel utilisateur.
   * Utilisé par le service d'auth pour l'inscription.
   */
  async create(data: { email: string; password: string; firstname: string; lastname: string; role?: Role }): Promise<User> {
    return this.prisma.user.create({ data });
  }

  /**
   * Recherche un utilisateur par email.
   * Utilisé pour la connexion ou vérification d'un doublon.
   */
  async findByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { email } });
  }

  /**
   * Recherche un utilisateur par ID.
   */
  async findById(id: string): Promise<User | null> {
    return this.prisma.user.findUnique({ where: { id } });
  }

  /**
   * Met à jour le refresh token hashé d'un utilisateur.
   */
  async updateRefreshToken(userId: string, refreshToken: string) {
    return this.prisma.user.update({
      where: { id: userId },
      data: { refreshToken },
    });
  }

  /**
   * Retourne tous les utilisateurs.
   * Pour les admins uniquement.
   */
  async findAll(): Promise<User[]> {
    return this.prisma.user.findMany();
  }

  /**
   * Retourne un utilisateur spécifique par ID.
   * Pour les admins uniquement.
   */
  async findOne(id: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { id } });
    if (!user) throw new NotFoundException('Utilisateur non trouvé');
    return user;
  }

  /**
   * Met à jour un utilisateur par ID.
   * Pour les admins uniquement.
   */
  async update(id: string, data: Partial<User>): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data,
    });
  }

  /**
   * Supprime un utilisateur par ID.
   * Pour les admins uniquement.
   */
  async remove(id: string): Promise<User> {
    return this.prisma.user.delete({ where: { id } });
  }
}
