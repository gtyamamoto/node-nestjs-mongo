import { IsNotEmpty, IsInt, Min, Max, Matches,IsOptional} from 'class-validator';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
const regexHHmm = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/; // Regex para validação de HH:mm campo de horas finais e de entrada
export class CreateRestaurantDto {
    @ApiProperty()
    @IsNotEmpty()
    readonly name: string;
    @ApiProperty()
    @IsNotEmpty()
    readonly address: string;
    @ApiPropertyOptional({ type: 'string', format: 'binary' })
    image: any;
    @ApiProperty()
    @IsNotEmpty()
    readonly startDay: number;
    @ApiProperty()
    @IsNotEmpty()
    @Matches(regexHHmm, { message: 'startHourMinutes must follow this pattern HH:mm' })
    readonly startHourMinutes: string;
    @ApiProperty()
    @IsNotEmpty()
    readonly endDay: number;
    @ApiProperty()
    @IsNotEmpty()
    @Matches(regexHHmm, { message: 'endHourMinutes must follow this pattern HH:mm' })
    readonly endHourMinutes: string
}