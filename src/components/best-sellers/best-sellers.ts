import { Component } from '@angular/core';
import { ProductServiceProvider } from '../../providers/services/product-service';

@Component({
    selector: 'best-sellers',
    templateUrl: './best-sellers.html',
    styleUrls: ['./best-sellers.scss']
})
export class BestSellersComponent {
    products: Array<any> = [];

    constructor(private productService: ProductServiceProvider) {
        this.productService.getBestSellersProducts().then((products) => {
            products = products.reverse();
            this.products = products;
        });
    }
}

