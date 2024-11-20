import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices'
import { PayablesBatchModule } from './payables-batch/payables-batch.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(PayablesBatchModule, {
    transport: Transport.RMQ,
    options: {
      urls: ['amqp://guest:guest@localhost:5672'],
      queue: 'payables_queue',
      queueOptions: {
        durable: true
      },
    },
  });  

  app.listen()
}
bootstrap();
