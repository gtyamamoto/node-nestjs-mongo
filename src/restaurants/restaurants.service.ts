import { Injectable, UsePipes, NotFoundException, BadRequestException, HttpException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Restaurant } from './restaurants.interface';
import { Model } from 'mongoose';


@Injectable()
export class RestaurantsService {

  constructor(@InjectModel('Restaurant') private readonly restaurantModel: Model<Restaurant>) {
  };


  async create(createRestaurantDto,imageURL=''): Promise<Restaurant> {
    const createdRestaurant = new this.restaurantModel({...createRestaurantDto,photoURL:imageURL});
    return createdRestaurant.save();
  }

  async findAll(): Promise<Restaurant[]> {
    return this.restaurantModel.find().exec();
  }
  async findOne(id: string): Promise<Restaurant> {
    return this.restaurantModel.findOne({ _id: id }).exec();
  }
  async deleteOne(id: string): Promise<any> {
    return this.restaurantModel.deleteOne({ _id: id }).exec();
  }
  async updateOne(id: string, updateRestaurantDto,fileURL=''): Promise<Restaurant> {
    const document = await this.restaurantModel.findOne({ _id: id });
    if (!document) throw new NotFoundException('document not found');
    document._doc = { ...document._doc, ...updateRestaurantDto };
    if(fileURL) document._doc['photoURL'] = fileURL;
    return document.save();
  }
}
