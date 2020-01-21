import { Module } from '@nestjs/common';
import { RestaurantsController } from './restaurants.controller';
import { RestaurantsService } from './restaurants.service';
import {  MongooseModule } from '@nestjs/mongoose';
import { RestaurantsSchema} from './restaurants.schema'
@Module({
  imports:[MongooseModule.forFeature([{name:'Restaurant',schema:RestaurantsSchema}])],
  controllers: [RestaurantsController],
  providers: [RestaurantsService]
})
export class RestaurantsModule {}
