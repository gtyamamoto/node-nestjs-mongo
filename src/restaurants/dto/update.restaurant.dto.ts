import { IsNotEmpty, IsInt,IsOptional, Min, Max, Matches } from 'class-validator';
import { Optional } from '@nestjs/common';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
const regexHHmm = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/; // Regex para validação de HH:mm campo de horas finais e de entrada
export class UpdateRestaurantDto {
    @ApiPropertyOptional()
    @IsOptional()
    readonly name: string;
    @ApiPropertyOptional()
    @IsOptional()
    readonly address: string;
    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(6)
    readonly startDay: number;
    @ApiPropertyOptional({ type: 'string', format: 'binary' })
    image: any;
    @ApiPropertyOptional()
    @IsOptional()
    @Matches(regexHHmm, { message: 'startHourMinutes must follow this pattern HH:mm' })
    readonly startHourMinutes: string;
    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(6)
    readonly endDay: number;
    @ApiPropertyOptional()
    @IsOptional()
    @Matches(regexHHmm, { message: 'endHourMinutes must follow this pattern HH:mm' })
    readonly endHourMinutes?: string
}