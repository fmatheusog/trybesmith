import { PrismaClient } from '@prisma/client';
import { sign as TokenSign } from 'jsonwebtoken';

import CreateUserDto from '../dtos/create-user.dto';
import JwtConfig from '../config/jwt.config';
import LoginDto from '../dtos/login-dto';

// Errors
import InternalError from '../errors/internal-error';
import BadRequestError from '../errors/bad-request.error';

const prisma = new PrismaClient();

export async function createUser(payload: CreateUserDto): Promise<string> {
  const userId = await prisma.$transaction(async (prismaClient) => {
    const user = await prismaClient.user.create({
      data: {
        name: payload.name,
        email: payload.email,
        password: payload.password,
      },
    });

    return user.id;
  });

  if (!userId) throw new InternalError('error creating user');

  try {
    const token = TokenSign({ id: userId }, 'secret', JwtConfig);
    return token;
  } catch (error) {
    throw new InternalError('error generating token');
  }
}

export async function login(payload: LoginDto): Promise<string> {
  const user = await prisma.user.findFirst({
    where: {
      email: payload.email,
    },
  });

  if (!user || user.password !== payload.password) {
    throw new BadRequestError('invalid credentials');
  }

  try {
    const token = TokenSign({ id: user.id }, 'secret', JwtConfig);
    return token;
  } catch (error) {
    throw new InternalError('error generating token');
  }
}
