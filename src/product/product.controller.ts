import { Controller, Post } from '@nestjs/common';
import { ProdcutService } from 'src/prodcut/prodcut.service';

@Controller('product')
export class ProductController {

    constructor(private productService : ProdcutService) {}

    @Post()
    registerUsers() : any {
        
    }
}
