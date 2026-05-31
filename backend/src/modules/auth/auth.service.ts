import { ConflictException, Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import type { Users } from 'generated/prisma/client';

import { AuthRepository } from './auth.repository';
import { RegisterInput } from '../dto/register.input';
// import { RegisterInput } from './dto/register.input';

const SALT_ROUNDS = 12;

type SafeUser = Omit<Users, 'password'>;

@Injectable()
class AuthService {
  constructor(private readonly authRepository: AuthRepository) {}

  async register(input: RegisterInput): Promise<{
    message: string;
    user: SafeUser;
  }> {
    const existingEmailUser = await this.authRepository.findByEmail(
      input.email,
    );

    if (existingEmailUser) {
      throw new ConflictException('Email is already registered');
    }

    const existingUsernameUser = await this.authRepository.findByUsername(
      input.username,
    );

    if (existingUsernameUser) {
      throw new ConflictException('Username is already taken');
    }

    const hashedPassword = await bcrypt.hash(input.password, SALT_ROUNDS);

    const user = await this.authRepository.create({
      name: input.name,
      username: input.username,
      email: input.email,
      password: hashedPassword,
    });

    return {
      message: 'User registered successfully',
      user: this.removePassword(user),
    };
  }

  private removePassword(user: Users): SafeUser {
    const { password, ...safeUser } = user;

    return safeUser;
  }
}

export { AuthService };
