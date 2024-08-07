import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { ProdcutService } from 'src/prodcut/prodcut.service';

@Controller('products')
export class ProductController {

    constructor(private readonly productsService: ProdcutService) { }

    @Post()
   async addProduct(@Body('title') prodTitle: string, @Body('description') prodDesc: string, @Body('price') prodPrice: number) {
        console.log(prodTitle, prodDesc,prodPrice)
        const productId = await this.productsService.insertProduct(prodTitle, prodDesc, prodPrice)
        return {
            id: productId
        }
    }

    @Get()
    getAllProduct() {
        const productList = this.productsService.productList();
        return {
            products: productList
        }
    }

    @Get(':id')
    getSingleProduct(@Param('id') prodId: number) {
      //  return this.productsService.findSingleProduct(prodId)
    }

    @Patch(':id')
    updateProduct(@Param('id') prodId: number, @Body('title') prodTitle : string, @Body('description') prodDesc : string, @Body('price') prodPrice : number) {
    //  this.productsService.updateProductById(prodId, prodTitle,prodDesc,prodPrice)
      return "Product Updated Successfully"
    }

    @Delete(':id')
    removeProduct(@Param('id') prodId: number) {
    // this.productsService.deleteProduct(prodId)
     return "Product Removed Successfully"
    }
}
