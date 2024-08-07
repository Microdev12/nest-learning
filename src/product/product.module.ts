import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductController } from "./product.controller";
import { ProdcutService } from "src/prodcut/prodcut.service";
import { productSchema } from "./product.model";

@Module({
   imports : [MongooseModule.forFeature([ {name : 'Product', schema: productSchema }])],
   controllers : [ProductController],
   providers : [ProdcutService]
})
export class productModule {

}