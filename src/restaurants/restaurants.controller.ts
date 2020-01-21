import { Controller, Get, Post, Body } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import {CreateRestaurantDto} from './dto/create.restaurant.dto'
@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService : RestaurantsService){}
    @Get()
    async find() {
        return await this.restaurantsService.findAll();
    }

    @Post()
    async create(@Body() createRestaurantDto: CreateRestaurantDto ){
        return await this.restaurantsService.create(createRestaurantDto);
    }
}
