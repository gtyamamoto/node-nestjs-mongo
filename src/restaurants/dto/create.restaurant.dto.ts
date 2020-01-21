import { IsNotEmpty } from 'class-validator';
export class CreateRestaurantDto {
    @IsNotEmpty()
    readonly name: string;
    @IsNotEmpty()
    readonly address: string;
    @IsNotEmpty()
   readonly photoURL:string;
   @IsNotEmpty()
   readonly startDay: string;
   @IsNotEmpty()
   readonly startHourMinutes:string;
   @IsNotEmpty()
   readonly endDay:string;
   @IsNotEmpty()
   readonly endHourMinutes:string
  }