import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {Restaurant} from './restaurants.interface';
import { Model } from 'mongoose';
@Injectable()
export class RestaurantsService {

    constructor(@InjectModel('Restaurant') private readonly restaurantModel : Model<Restaurant>){
    };
    async create(createRestaurantDto ): Promise<Restaurant> {
        const createdRestaurant = new this.restaurantModel(createRestaurantDto);
        return createdRestaurant.save();
      }
    
      async findAll(): Promise<Restaurant[]> {
        return this.restaurantModel.find().exec();
      }
    
    
}
