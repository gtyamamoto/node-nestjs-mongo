import { Controller, Get, Post, Body, Param, Delete, Put, BadRequestException } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import {CreateRestaurantDto} from './dto/create.restaurant.dto';
import {UpdateRestaurantDto} from './dto/update.restaurant.dto';
import { DateIntervalValidationPipe } from '../validators/dateinterval.pipe';
import {MongoidPipe} from '../validators/mongoid.pipe'
@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService : RestaurantsService){}
    @Get()
    async find() {
        return await this.restaurantsService.findAll();
    }
    @Get(':id')
    async findOne(@Param('id',new MongoidPipe())  id){
        return await this.restaurantsService.findOne(id);
    }
    @Put(':id')
    async updateOne(@Param('id', new MongoidPipe()) id,
        @Body(new DateIntervalValidationPipe()) 
    updateRestaurantDto: UpdateRestaurantDto){
        try {
            return await this.restaurantsService.updateOne(id,updateRestaurantDto) 
        } catch (error) {
            throw new BadRequestException(error.message)
        }
       
    }
    @Delete(':id')
    async deleteOne(@Param('id',new MongoidPipe()) id){
        return await this.restaurantsService.deleteOne(id);
    }

    @Post()
    async create(@Body(new DateIntervalValidationPipe()) createRestaurantDto: CreateRestaurantDto ){
        return await this.restaurantsService.create(createRestaurantDto);
    }
}
