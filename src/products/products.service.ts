import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {Product} from './product.interface'
@Injectable()
export class ProductsService {

    
  constructor(
  @InjectModel('Product') private readonly productModel : Model <Product>
  ) {
};


async create(restaurant_id,productModel,fileURL=''): Promise<Product> {
  const createdProduct = new this.productModel({restaurant:restaurant_id,...productModel,photoURL:fileURL});
  return createdProduct.save();
}

async findAll(id_restaurant:string): Promise<Product[]> {
  return this.productModel.find({restaurant:id_restaurant}).exec();
}
async deleteOne(id: string): Promise<any> {
  return this.productModel.deleteOne({ _id: id }).exec();
}
async updateOne(id: string, updateProductDto,fileURL=''): Promise<Product> {
  const document = await this.productModel.findOne({ _id: id });
  if (!document) throw new NotFoundException('product not found');
  document._doc = { ...document._doc, ...updateProductDto };
  if(fileURL) document._doc['photoURL'] = fileURL;
  return document.save();
}
}
