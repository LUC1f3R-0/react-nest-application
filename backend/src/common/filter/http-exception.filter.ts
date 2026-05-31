import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { Request, Response } from 'express';

@Catch(HttpException)
class HttpExceptionFilter implements ExceptionFilter, GqlExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    // GraphQL must not use response.status().json().
    // Let Nest/Apollo convert the HttpException into a GraphQL error.
    if (host.getType<string>() === 'graphql') {
      return exception;
    }

    const context = host.switchToHttp();
    const response = context.getResponse<Response>();
    const request = context.getRequest<Request>();

    const status = exception.getStatus();
    const exceptionResponse = exception.getResponse();

    const message =
      typeof exceptionResponse === 'object' &&
      exceptionResponse !== null &&
      'message' in exceptionResponse
        ? (exceptionResponse as { message: string | string[] }).message
        : exception.message;

    const requestId =
      typeof request.headers['x-request-id'] === 'string'
        ? request.headers['x-request-id']
        : null;

    response.status(status).json({
      success: false,
      statusCode: status,
      message,
      path: request.originalUrl,
      method: request.method,
      requestId,
      timestamp: new Date().toISOString(),
    });
  }
}

export { HttpExceptionFilter };
