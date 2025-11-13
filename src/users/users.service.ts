import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';


@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}


  // CRUD operations

  // Create
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  // Read all
  findAll() {
    return `This action returns all users`;
  }

  // Read One
  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

// Update
  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }
// Delete
  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
