import { Component } from '@angular/core';
import { ProductServiceProvider } from '../../providers/services/product-service';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Observable, Subscription} from 'rxjs';

@Component({
    selector: 'page-category',
    templateUrl: './category.html',
    styleUrls: ['./category.scss']
})
export class CategoryPageComponent {
    products: Array<any> = [
        {},
        {},
        {},
        {}
    ];
    name: string;

    constructor(private productService: ProductServiceProvider, private router: Router, private route: ActivatedRoute) {
        this.name = this.route.root.firstChild.snapshot.data['title'];
        let path = this.route.snapshot.routeConfig.path;


            let routerObservable: Subscription = this.router.events.subscribe(event => {
                if(event instanceof NavigationEnd) {

                    routerObservable.unsubscribe();
                }
            });

        this.productService.getProductsByCategory(path).then((products) => {
            products = products.reverse();
            this.products = products;
        });
    }
}

