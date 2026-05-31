import {
  CallHandler,
  ExecutionContext,
  Injectable,
  Logger,
  NestInterceptor,
} from '@nestjs/common';
import { Request } from 'express';
import { catchError, Observable, tap, throwError } from 'rxjs';

@Injectable()
class LoggingInterceptor implements NestInterceptor {
  private readonly logger = new Logger(LoggingInterceptor.name);

  intercept(context: ExecutionContext, next: CallHandler): Observable<unknown> {
    // This interceptor is written for REST requests.
    // GraphQL resolvers do not use the same HTTP context shape.
    if (context.getType<string>() === 'graphql') {
      return next.handle();
    }

    const request = context.switchToHttp().getRequest<Request>();

    // Safety check, so the app will not crash if request is undefined.
    if (!request) {
      return next.handle();
    }

    const method = request.method;
    const url = request.originalUrl;
    const requestId =
      typeof request.headers['x-request-id'] === 'string'
        ? request.headers['x-request-id']
        : 'no-request-id';

    const start = Date.now();

    this.logger.log(`→ ${method} ${url} [${requestId}]`);

    return next.handle().pipe(
      tap(() => {
        const duration = Date.now() - start;
        this.logger.log(`← ${method} ${url} [${requestId}] +${duration}ms`);
      }),

      catchError((error) => {
        const duration = Date.now() - start;
        const message = error instanceof Error ? error.message : String(error);

        this.logger.error(
          `× ${method} ${url} [${requestId}] +${duration}ms - ${message}`,
        );

        return throwError(() => error);
      }),
    );
  }
}

export { LoggingInterceptor };
