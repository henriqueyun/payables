import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PayableDTO } from "./dto/PayableDTO";
import { plainToClass } from "class-transformer";
import { parseArgs } from "util";

@Injectable({})
export class PayableService {
    constructor(private prisma: PrismaService) { }

    async createPayable(payable: PayableDTO): Promise<PayableDTO> {
        const [receivable, assignor] = await Promise.all([
            this.prisma.receivable.create({ data: { ...payable.receivable } }),
            this.prisma.assignor.create({ data: { ...payable.assignor } })
        ])
        return { receivable, assignor }
    }

    findPayable(id: string) {
        const payable = this.prisma.receivable.findFirst({ where: { id }})
        return payable  
    }
}