import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import Utils from '../../utils/utils';

@Injectable()
export class ProductServiceProvider {
    constructor(private http: HttpClient) {}

    getBestSellersProducts(): Promise<any> {
        return new Promise((resolve, reject) => {
            this.http.get(Utils.EP_BEST_SELLERS_PRODUCTS).subscribe((products: any) => {
                resolve(products);
            }, (e) => {
                reject(e);
            });
        });
    }

    getProductsByCategory(category: string): Promise<any> {
        return new Promise((resolve, reject) => {
            let path = Utils.EP_CATEGORY_PRODUCTS + category;

            this.http.get(path).subscribe((products: any) => {
                resolve(products);
            }, (e) => {
                reject(e);
            });
        });
    }
}
