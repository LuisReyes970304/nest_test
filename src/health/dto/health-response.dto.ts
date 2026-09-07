import { ApiProperty } from "@nestjs/swagger";

/**
 * DTO utilizado para representar la respuesta
 * del endpoint de health check.
 *
 * @class HealthResponseDto
 */
export class HealthResponseDto {
  /**
   * Estado actual de la API.
   *
   * @type {string}
   */
  @ApiProperty({
    description: "Estado actual de la API.",
    example:"Ok",
  })
  status: string;

  /**
   * Fecha y hora en la que se gener贸 la respuesta.
   *
   * @type {string}
   */
  timestamp: string;

  /**
   * Nombre de la aplicaci贸n.
   *
   * @type {string}
   */
  application: string;

  /**
   * Versi贸n de la aplicaci贸n.
   *
   * @type {string}
   */
  version: string;
}