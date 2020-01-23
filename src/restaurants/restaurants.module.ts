import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import {  MongooseModule } from '@nestjs/mongoose';
import { RestaurantsSchema} from './restaurants.schema'
import { MulterModule } from '@nestjs/platform-express';
@Module({
  imports:[ MulterModule.register({
    dest: './uploads',
  }),MongooseModule.forFeature([{name:'Restaurant',schema:RestaurantsSchema}])],
  controllers: [RestaurantsController],
  providers: [RestaurantsService],
  exports:[MongooseModule]
})
export class RestaurantsModule {}
