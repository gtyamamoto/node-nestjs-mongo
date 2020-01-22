import { IsNotEmpty, IsInt, Min, Max, Matches } from 'class-validator';
const regexHHmm = /^(2[0-3]|[0-1]?[\d]):[0-5][\d]$/; // Regex para validação de HH:mm campo de horas finais e de entrada
export class CreateRestaurantDto {
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly address: string;
    @IsNotEmpty()
    readonly photoURL: string;
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(6)
    readonly startDay: number;
    @IsNotEmpty()
    @Matches(regexHHmm, { message: 'startHourMinutes must follow this pattern HH:mm' })
    readonly startHourMinutes: string;
    @IsNotEmpty()
    @IsInt()
    @Min(0)
    @Max(6)
    readonly endDay: number;
    @IsNotEmpty()
    @Matches(regexHHmm, { message: 'endHourMinutes must follow this pattern HH:mm' })
    readonly endHourMinutes: string
}