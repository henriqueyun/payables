import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { PayableModule } from './integrations/payable/payable.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';
import { AssignorModule } from './integrations/assignor/assignor.module';
import { AuthModule } from './integrations/auth/auth.module';
import { RabbitmqModule } from './rabbitmq/rabbitmq.module';
import { ErrorsModule } from './errors/errors.module';
import { APP_FILTER } from '@nestjs/core';
import { prismaKnownRequestErrorFilter } from './errors/errors.filter';

@Module({
  imports: [PayableModule, AssignorModule, PrismaModule, ConfigModule.forRoot({
    isGlobal: true
  }), AuthModule, RabbitmqModule, ErrorsModule],
  controllers: [AppController],
  providers: [PrismaModule,
    {
      provide: APP_FILTER,
      useClass: prismaKnownRequestErrorFilter,
    }
  ],
})
export class AppModule { }
