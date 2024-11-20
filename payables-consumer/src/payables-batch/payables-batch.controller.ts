import { Controller } from '@nestjs/common';
import { Ctx, MessagePattern, Payload, RmqContext } from '@nestjs/microservices';
import { PayablesBatchService } from './payables-batch.service';
import { PayableDTO } from './dto/PayableDTO';
@Controller()
export class PayablesBatchController {
  constructor(private readonly payablesBatchService: PayablesBatchService) {}

  @MessagePattern('payables_queue')
  create(@Payload() payableDTO: PayableDTO, @Ctx() ctx: RmqContext) {
    console.log('payload:', payableDTO)
    const channel = ctx.getChannelRef()
    const msg = ctx.getMessage()
    console.log('msg', msg)
    return this.payablesBatchService.create(payableDTO);
  }
}
