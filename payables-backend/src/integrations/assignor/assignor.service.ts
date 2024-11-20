import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { AssignorDTO } from './dto/AssignorDTO';

@Injectable()
export class AssignorService {

  constructor(private prisma: PrismaService) { }

  create(dto: AssignorDTO) {
    return this.prisma.assignor.create({ data: dto })
  }
  
  findAll() {
    return this.prisma.assignor.findMany()
  }
  
  find(id: string) {
    return this.prisma.assignor.findFirstOrThrow({ where: { id } })
  }

  update(id: string, dto: Partial<AssignorDTO>) {
    return this.prisma.assignor.update({
      where: { id },
      data: { ...dto, id }
    })
  }


  remove(id: string) {
    return this.prisma.assignor.delete({ where: { id } })
  }
}
