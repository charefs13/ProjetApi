import { Role } from '@prisma/client';
export declare class RegisterDto {
    email: string;
    password: string;
    firstname: string;
    lastname: string;
    role?: Role;
}
