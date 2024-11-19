import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class AssignorService {

  constructor(private prisma: PrismaService) {}

  find(id: string) {
      return this.prisma.assignor.findFirst({ where: { id }})
  }
}
