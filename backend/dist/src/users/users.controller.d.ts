import { UsersService } from './users.service';
import { UpdateUserDto } from './dto/update-user.dto';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    findAll(user: any): Promise<{
        id: string;
        email: string;
        password: string;
        firstname: string;
        lastname: string;
        refreshToken: string | null;
        role: import("@prisma/client").$Enums.Role;
        createdAt: Date;
        updatedAt: Date;
    }[]>;
    findOne(user: any, id: string): Promise<{
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
    update(user: any, id: string, updateUserDto: UpdateUserDto): Promise<{
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
    remove(user: any, id: string): Promise<void>;
}
