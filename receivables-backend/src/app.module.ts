import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PayableModule } from './integrations/payable/payable.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AssignorModule } from './integrations/assignor/assignor.module';

@Module({
  imports: [PayableModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true
  }), AssignorModule],
  controllers: [AppController],
  providers: [PrismaModule],
})
export class AppModule { }
