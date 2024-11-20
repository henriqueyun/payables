import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PayableModule } from './integrations/payable/payable.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AssignorModule } from './integrations/assignor/assignor.module';
import { AuthModule } from './integrations/auth/auth.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';

@Module({
  imports: [PayableModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true
  }), AssignorModule, AuthModule, RabbitmqModule],
  controllers: [AppController],
  providers: [PrismaModule],
})
export class AppModule { }
