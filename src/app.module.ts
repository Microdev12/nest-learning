import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ExampleController } from './example/example.controller';
import { ExampleService } from './example/example.service';
import { ProductController } from './product/product.controller';
import { ProdcutService } from './prodcut/prodcut.service';

@Module({
  imports: [],
  controllers: [AppController, ExampleController, ProductController],
  providers: [AppService, ExampleService, ProdcutService],
})
export class AppModule {}
