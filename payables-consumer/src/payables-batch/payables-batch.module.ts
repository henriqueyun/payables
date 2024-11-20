import { Module } from '@nestjs/common';
import { PayablesBatchService } from './payables-batch.service';
import { PayablesBatchController } from './payables-batch.controller';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'PAYABLES_SERVICE',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://guest:guest@localhost:5672'],
          queue: 'payables_queue',
          queueOptions: {
            durable: false
          },
        },
      },
    ]),
  ],
  controllers: [PayablesBatchController],
  providers: [PayablesBatchService],
})
export class PayablesBatchModule { }
