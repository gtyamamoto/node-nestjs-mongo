import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import {MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ConfigModule } from '@nestjs/config';
@Module({
  imports: [],
})
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017'),
    ProductsModule, RestaurantsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
