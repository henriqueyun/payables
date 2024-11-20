import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserDTO } from './dto/UserDTO';
import { PrismaService } from 'src/prisma/prisma.service';
import { JwtService } from '@nestjs/jwt';
import { hash, compare } from 'bcrypt'

@Injectable()
export class AuthService {
  constructor(private prisma: PrismaService, private jwtService: JwtService) { }

  async signUp(userDTO: UserDTO) {
    const { login, password } = userDTO
    const hashPassword = await hash(password, 10)
    await this.prisma.user.create({ data: { login, password: hashPassword } })
  }

  async signIn(userDTO: UserDTO) {
    const { login, password } = userDTO
    const user = await this.prisma.user.findFirst({ where: { login } })
    const hashPassword = user.password

    const isPasswordValid = await compare(password, hashPassword)

    if (!isPasswordValid) {
      throw new UnauthorizedException()
    }

    return {
      access_token: await this.jwtService.signAsync({ sub: user.id, login })
    }
  }
}
