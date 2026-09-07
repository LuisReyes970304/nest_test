import { Controller, Get, HttpStatus } from '@nestjs/common';
import { HealthService } from './health.service.js';
import { HealthResponseDto } from './dto/health-response.dto.js';
import {
  ApiOkResponse,
  ApiTags,
  ApiNotFoundResponse,
  ApiInternalServerErrorResponse,
} from '@nestjs/swagger';

@ApiTags('Health')
@Controller('health')
export class HealthController {
  public constructor(private readonly healthService: HealthService) {}

  @Get()
  @ApiOkResponse({
    description: 'La API se encuentra disponible.',
    type: HealthResponseDto,
  })
  @ApiNotFoundResponse({
    description: 'No se encontró información del servicio.',
    example: {
      statusCode: 404,
      message: 'Health information not found',
      error: 'Not Found',
    },
  })
  @ApiInternalServerErrorResponse({
    description: 'Se produjo un error interno en el servidor.',
    example: {
      statusCode: 500,
      message: 'Internal server error',
      error: 'Internal Server Error',
    },
  })
  public getHealt(): HealthResponseDto {
    return this.healthService.getHealth();
  }
}