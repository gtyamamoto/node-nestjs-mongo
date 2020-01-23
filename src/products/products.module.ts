import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductSchema } from './products.schema';
import { RestaurantsModule } from 'src/restaurants/restaurants.module';
import { MulterModule } from '@nestjs/platform-express';

@Module({
  imports:[ MulterModule.register({
    dest: './uploads',
  }), MongooseModule.forFeature([{name:'Product',schema:ProductSchema}]),RestaurantsModule],
  controllers: [ProductsController],
  providers: [ProductsService]
})
export class ProductsModule {}
