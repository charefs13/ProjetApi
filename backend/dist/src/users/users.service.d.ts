import { PrismaService } from '../prisma/prisma.service';
import { User, Role } from '@prisma/client';
export declare class UsersService {
    private prisma;
    constructor(prisma: PrismaService);
    create(data: {
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        role?: Role;
    }): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    updateRefreshToken(userId: string, refreshToken: string): Promise<{
        id: string;
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        refreshToken: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }>;
    findAll(): Promise<User[]>;
    findOne(id: string): Promise<User>;
    update(id: string, data: Partial<User>): Promise<User>;
    remove(id: string): Promise<User>;
}
