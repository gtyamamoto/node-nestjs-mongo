import { Controller, Get, Param, Put, Body, BadRequestException, Delete, Post, UseInterceptors, UploadedFile, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { MongoidPipe } from 'src/validators/mongoid.pipe';
import { DateIntervalValidationPipe } from 'src/validators/dateinterval.pipe';
import { UpdateProductDto } from './dto/update.product.dto'
import { CreateProductDto } from './dto/create.product.dto'
import { FileInterceptor } from '@nestjs/platform-express';
import { imageFileFilter } from 'src/utils/file.filter';
import { ApiParam, ApiConsumes } from '@nestjs/swagger';

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductsService) { }
    @Get('restaurant/:restaurant')
    @ApiParam({ name: 'restaurant', type: String })
    async find(@Param('restaurant', new MongoidPipe()) id) {
        return await this.productsService.findAll(id);
    }
    @Put(':id')
    @ApiConsumes('multipart/form-data')
    @ApiParam({ name: 'id', type: String })
    @UseInterceptors(FileInterceptor('image', { fileFilter: imageFileFilter }))
    async updateOne(@Param('id', new MongoidPipe()) id,
        @Body(new ValidationPipe())
        updateProductDto: UpdateProductDto, @UploadedFile() file) {
        try {
            let fileURL = ''
            if (file) {
                fileURL = file.path;
            }
            return await this.productsService.updateOne(id, updateProductDto, fileURL)
        } catch (error) {
            throw new BadRequestException(error.message)
        }

    }
    @Delete(':id')
    @ApiParam({ name: 'id', type: String })
    async deleteOne(@Param('id', new MongoidPipe()) id) {
        return await this.productsService.deleteOne(id);
    }

    @Post('restaurant/:restaurant')
    @ApiConsumes('multipart/form-data')
    @ApiParam({ name: 'restaurant', type: String })
    @UseInterceptors(FileInterceptor('image', { fileFilter: imageFileFilter }))
    async create(@Param('restaurant', new MongoidPipe()) id,
    @Body(new ValidationPipe())    
    createProductDto: CreateProductDto
        , @UploadedFile() file) {
            console.log(createProductDto)
        try {
            let fileURL = ''
            if (file) {
                fileURL = file.path;
            }
            return await this.productsService.create(id, createProductDto, fileURL);
        } catch (error) {
            throw new BadRequestException(error.message)
        }
    }
}
