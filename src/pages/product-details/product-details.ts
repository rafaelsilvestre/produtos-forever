import { Component } from '@angular/core';

@Component({
    selector: 'page-product-details',
    templateUrl: './product-details.html',
    styleUrls: ['./product-details.scss']
})
export class ProductDetailsPageComponent {
    path: Array<any> = [
        {path: '/', title: 'Home'},
        {path: '/', title: 'Bebidas'},
        {path: '/quem-somos', title: 'Aloe Vera Gel', active: true}
    ];
}
