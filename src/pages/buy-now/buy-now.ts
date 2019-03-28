import { Component } from '@angular/core';

@Component({
    selector: 'page-buy-now',
    templateUrl: './buy-now.html',
    styleUrls: ['./buy-now.scss']
})
export class BuyNowPageComponent {
    path: Array<any> = [
        {path: '/', title: 'Home'},
        {path: '/quero-comprar-agora', title: 'Comprar Agora', active: true}
    ];
}

