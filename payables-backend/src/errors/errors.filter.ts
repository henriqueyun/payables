import { ArgumentsHost, Catch, ExceptionFilter, InternalServerErrorException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';

@Catch(PrismaClientKnownRequestError)
export class prismaKnownRequestErrorFilter implements ExceptionFilter {
  catch(exception: PrismaClientKnownRequestError, host: ArgumentsHost) {
    const ctx = host.switchToHttp()
    const response = ctx.getResponse()

    // TODO: turn it more readable
    const PRISMA_ERROR_CODES = {
      'P2001': 404,
      'P2002': 409,
      'P2025': 404,
    }

    const statusCode = PRISMA_ERROR_CODES[exception.code] ?? 500

    response.status(statusCode).json({
      error: exception.name,
      message: exception.message, // TODO: threat message to not expose server code
    })
  }
}