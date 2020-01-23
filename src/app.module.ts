import { Module } from '@nestjs/common';
import {MongooseModule } from '@nestjs/mongoose';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { RestaurantsModule } from './restaurants/restaurants.module';
import { ConfigModule } from '@nestjs/config';
import {MulterModule} from '@nestjs/platform-express'

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    MulterModule.register({
      dest: './uploads',
    }),
    MongooseModule.forRoot(process.env.MONGO_URI || 'mongodb://localhost:27017/goomer_rango'),
    ProductsModule, RestaurantsModule],
  providers: [AppService],
})
export class AppModule {}
