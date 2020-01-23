import { IsNotEmpty, IsInt, Min, Max, Matches,IsOptional,IsCurrency } from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
const regexHHmm = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/; // Regex para validação de HH:mm campo de horas finais e de entrada
export class UpdateProductDto {
    @ApiPropertyOptional()
    @IsOptional()
    readonly name: string;
    @ApiPropertyOptional({ type: 'string', format: 'binary' })
    image: any;
    @ApiPropertyOptional()
    @IsOptional()
    readonly category: string;
    @ApiPropertyOptional()
    @IsOptional()
    @IsCurrency()
    readonly price : number;
    @ApiPropertyOptional()
    @IsOptional()
    @IsCurrency()
    readonly pricePromo : number;
    @ApiPropertyOptional()
    @IsOptional()
    @IsInt()
    @Min(0)
    @Max(6)
    readonly promoDay: number;
    @ApiPropertyOptional()
    @IsOptional()
    @Matches(regexHHmm, { message: 'startHourMinutes must follow this pattern HH:mm' })
    readonly startHourMinutes: string;
}