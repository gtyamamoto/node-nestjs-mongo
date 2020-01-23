import { PipeTransform, Injectable, ArgumentMetadata, BadRequestException } from '@nestjs/common';
import { validate } from 'class-validator';
import { plainToClass } from 'class-transformer';

@Injectable()
export class DateIntervalValidationPipe implements PipeTransform<any> {
  async transform(value: any, { metatype }: ArgumentMetadata) {
    if (!metatype || !this.toValidate(metatype)) {
      return value;
    }
    const object = plainToClass(metatype, value);
    const errors = await validate(object);
    if (errors.length > 0) {
      throw new BadRequestException(errors.map(err=>Object.values(err.constraints).join(',')));
    }
    if(value.endHourMinutes&&value.startHourMinutes){

      const timeEnds = Number(value.endHourMinutes.split(':')[0])*60 + Number(value.endHourMinutes.split(':')[1])
      const timeStarts = Number(value.startHourMinutes.split(':')[0])*60 + Number(value.startHourMinutes.split(':')[1])
      if((timeStarts+15)>timeEnds) throw new BadRequestException(
        ['endHourMinutes must be at least 15 minutes greater than startHourMinutes'])
    }
    return value;
  }

  private toValidate(metatype: Function): boolean {
    const types: Function[] = [String, Boolean, Number, Array, Object];
    return !types.includes(metatype);
  }
}