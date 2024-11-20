import { Injectable, PayloadTooLargeException } from "@nestjs/common";
import { PrismaService } from "src/prisma/prisma.service";
import { PayableDTO, PayableBatchDTO } from "./dto/PayableDTO";
import { ConfigService } from "@nestjs/config";
import { RabbitMQService } from "src/rabbitmq/rabbitmq.service";

@Injectable({})
export class PayableService {
    constructor(private prisma: PrismaService, private config: ConfigService, private rabbitmq: RabbitMQService) { }

    async create(payable: PayableDTO): Promise<PayableDTO> {
        return await this.prisma.payable.create({ data: payable })
    }

    async batchCreate(dto: PayableBatchDTO) {
        const { payables } = dto
        if (payables.length > (this.config.get('PAYABLE_BATCH_LIMIT') || 10000)) {
            throw new PayloadTooLargeException()
        }

        const promises = payables.map(async (p) => {
            return this.rabbitmq.sendPayable(p)
        })

        await Promise.all(promises)

        return
    }

    findAll() {
        return this.prisma.payable.findMany()
    }

    find(id: string) {
        return this.prisma.payable.findFirstOrThrow({ where: { id } })
    }

    update(id: string, dto: Partial<PayableDTO>) {
        return this.prisma.payable.update({
            where: { id },
            data: { ...dto, id }
        })
    }

    remove(id: string) {
        return this.prisma.payable.delete({ where: { id } })
    }
}