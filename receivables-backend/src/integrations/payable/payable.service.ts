import { Injectable, PayloadTooLargeException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PayableDTO, PayableBatchDTO } from "./dto/PayableDTO";
import { ConfigService } from "@nestjs/config";
import { RabbitMQService } from "src/rabbitmq/rabbitmq.service";

@Injectable({})
export class PayableService {
    constructor(private prisma: PrismaService, private config: ConfigService, private rabbitmq: RabbitMQService) { }

    async createPayable(payable: PayableDTO): Promise<PayableDTO> {
        const [receivable, assignor] = await Promise.all([
            this.prisma.receivable.create({ data: { ...payable.receivable } }),
            this.prisma.assignor.create({ data: { ...payable.assignor } })
        ])
        return { receivable, assignor }
    }

    async batchCreatePayable(dto: PayableBatchDTO) {
        const { payables } = dto
        console.log(payables.length)
        if (payables.length > (this.config.get('PAYABLE_BATCH_LIMIT') || 10000)) {
            throw new PayloadTooLargeException()
        }

        const promises = payables.map(async (p)=> {
             return this.rabbitmq.sendPayable(p)
        })

        await Promise.all(promises)

        return
    }

    findPayable(id: string) {
        const payable = this.prisma.receivable.findFirst({ where: { id }})
        return payable  
    }
}