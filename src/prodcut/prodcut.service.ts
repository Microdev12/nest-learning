import { Injectable, NotFoundException } from '@nestjs/common';
import { find } from 'rxjs';
import { Product } from 'src/product/product.model';

@Injectable()
export class ProdcutService {

    products: Product[] = [];

    insertProduct(title: string, desc: string, price: number) {
        const prodId = this.products.length + 1;
        const newProduct = new Product(prodId, title, desc, price)
        this.products.push(newProduct)
        return prodId
    }

    productList() {
        return [...this.products]
    }

    findSingleProduct(prodId: number) {
        //console.log(prodId)
        const product = this.findProduct(prodId);
        return product[0]
    }

    updateProductById(prodId: number, title: string, desc: string, price: number) {
        const [product, index] = this.findProduct(prodId);
        const updatedProduct = { ...product }

        if (title) {
            updatedProduct.title = title
        }
        if (desc) {
            updatedProduct.desc = desc
        }
        if (price) {
            updatedProduct.price = price
        }
        this.products[index] = updatedProduct
    }

    findProduct(id: number): [Product, number] {
        const productIndex = this.products.findIndex((ele) => ele.id == id);
        const product = this.products[productIndex]
        if (!product) {
            throw new NotFoundException('Could not find Product')
        }
        return [product, productIndex]
    }


    deleteProduct(prodId : number) {
    //    console.log(prodId, "controller se kya value mila")
       const index = this.findProduct(prodId)
    //    console.log(index, index[0], index[1])
       this.products.splice(1,index[1])

    }


}
