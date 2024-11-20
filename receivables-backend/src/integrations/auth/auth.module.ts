import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule,
    JwtModule.register({
    global: true,
    secret: process.env.JWT_SECRET ?? "DEVELOPMENT-DEFAULT-KEY",
    signOptions: { expiresIn: '60s'}
  })],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}