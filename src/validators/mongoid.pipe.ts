import { ArgumentMetadata, Injectable, PipeTransform, BadRequestException } from '@nestjs/common';
import {Validator} from 'class-validator';
@Injectable()
export class MongoidPipe implements PipeTransform {
  transform(value: any, metadata: ArgumentMetadata) {
    if(!this.validateMongoId(value))  throw new BadRequestException('Invalid Mongo Id')
    return value;
  }
  validateMongoId(id:string) : boolean{
    const validator = new Validator();
    return validator.isMongoId(id)
}
}
