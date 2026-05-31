import { Injectable } from '@nestjs/common';
import type { Prisma, Users } from 'generated/prisma/client';
import { PrismaService } from 'src/infastructure/database/database.service';

@Injectable()
class AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async findByEmail(email: string): Promise<Users | null> {
    return this.prisma.users.findUnique({
      where: {
        email,
      },
    });
  }

  async findByUsername(username: string): Promise<Users | null> {
    return this.prisma.users.findUnique({
      where: {
        username,
      },
    });
  }

  async create(data: Prisma.UsersCreateInput): Promise<Users> {
    return this.prisma.users.create({
      data,
    });
  }
}

export { AuthRepository };
