import { Module } from '@nestjs/common';
import { PayableController } from './payable.controller';
import { PayableService } from './payable.service';
import { RabbitmqModule } from 'src/rabbitmq/rabbitmq.module';

@Module({
    imports: [RabbitmqModule],
    controllers: [PayableController],
    providers: [PayableService]
})
export class PayableModule {
}
