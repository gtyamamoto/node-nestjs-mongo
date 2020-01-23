import { Controller, Get, Post, Body, Param, Delete, Put, BadRequestException, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { RestaurantsService } from './restaurants.service';
import {CreateRestaurantDto} from './dto/create.restaurant.dto';
import {UpdateRestaurantDto} from './dto/update.restaurant.dto';
import { DateIntervalValidationPipe } from '../validators/dateinterval.pipe';
import {imageFileFilter} from '../utils/file.filter'
import {MongoidPipe} from '../validators/mongoid.pipe'
import { FileInterceptor } from '@nestjs/platform-express';
import { ApiProperty, ApiParam, ApiConsumes } from '@nestjs/swagger';
@Controller('restaurants')
export class RestaurantsController {
    constructor(private readonly restaurantsService : RestaurantsService){}
    @Get()
    async find() {
        return await this.restaurantsService.findAll();
    }
    @Get(':id')
    @ApiParam({name:'id',type:String})
    async findOne(@Param('id',new MongoidPipe())  id){
        return await this.restaurantsService.findOne(id);
    }
    @Put(':id')
    @ApiConsumes('multipart/form-data')
    @ApiParam({name:'id',type:String})
    @UseInterceptors(FileInterceptor('image',{fileFilter:imageFileFilter}))
    async updateOne(
        
        @Param('id', new MongoidPipe()) id,
        @Body(new DateIntervalValidationPipe()) 
    updateRestaurantDto: UpdateRestaurantDto,@UploadedFile() file){
        try {
            let fileURL = ''
            if(file){
               fileURL = file.path;
            }
            return await this.restaurantsService.updateOne(id,updateRestaurantDto,fileURL) 
        } catch (error) {
            throw new BadRequestException(error.message)
        }
       
    }
    @Delete(':id')
    @ApiParam({name:'id',type:String})
    async deleteOne(@Param('id',new MongoidPipe()) id){
        return await this.restaurantsService.deleteOne(id);
    }

    @Post()
    @ApiConsumes('multipart/form-data')
    @UseInterceptors(FileInterceptor('image',{fileFilter:imageFileFilter}))
    async create(@Body(new DateIntervalValidationPipe()) createRestaurantDto: CreateRestaurantDto,@UploadedFile() file ){
        try {
            let fileURL = ''
            if(file){
               fileURL = file.path;
            }
            return await this.restaurantsService.create(createRestaurantDto,fileURL);  
        } catch (error) {
            throw new BadRequestException(error.message)
        }
       
    }
}
