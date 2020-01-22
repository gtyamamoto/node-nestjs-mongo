import { IsNotEmpty, IsInt,IsOptional, Min, Max, Matches } from 'class-validator';
import { Optional } from '@nestjs/common';
const regexHHmm = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/; // Regex para validação de HH:mm campo de horas finais e de entrada
export class UpdateRestaurantDto {
    @IsOptional()
    readonly name: string;
    @IsOptional()
    readonly address: string;
    @IsOptional()
    readonly photoURL: string;
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(6)
    readonly startDay: number;
    @IsOptional()
    @Matches(regexHHmm, { message: 'startHourMinutes must follow this pattern HH:mm' })
    readonly startHourMinutes: string;
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(6)
    readonly endDay: number;
    @IsOptional()
    @Matches(regexHHmm, { message: 'endHourMinutes must follow this pattern HH:mm' })
    readonly endHourMinutes?: string
}