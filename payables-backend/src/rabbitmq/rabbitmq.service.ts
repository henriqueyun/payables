import { Inject, Injectable } from '@nestjs/common';
import {
  ClientProxy,
  ClientRMQ,
} from '@nestjs/microservices';
import { PayableDTO } from 'src/integrations/payable/dto/PayableDTO';

@Injectable()
export class RabbitMQService {

  constructor(@Inject('PAYABLES_RABBITMQ_SERVICE') private client: ClientRMQ) {}

  async sendPayable(payable: PayableDTO) {
    console.log('toma gap', payable)
    this.client.emit('payables_queue', payable)
  }
}