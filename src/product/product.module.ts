import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProdcutService } from "src/prodcut/prodcut.service";

@Module({
   controllers : [ProductController],
   providers : [ProdcutService]
})
export class productModule {

}