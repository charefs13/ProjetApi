import { Role } from '@prisma/client';
export declare class UserEntity {
    id: string;
    email: string;
    firstname: string;
    lastname: string;
    role: Role;
    createdAt: Date;
    updatedAt: Date;
}
