import { PrismaClient } from '@prisma/client';

export class Prisma {
  private static instance: Prisma;
  prisma: PrismaClient;

  private constructor() {
    this.prisma = new PrismaClient();
  }

  static getInstance(): Prisma {
    if (!Prisma.instance) {
      Prisma.instance = new Prisma();
    }

    return Prisma.instance;
  }
}
