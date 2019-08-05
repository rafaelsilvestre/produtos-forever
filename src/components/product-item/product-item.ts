import { Component, Input } from '@angular/core';

@Component({
    selector: 'product-item',
    templateUrl: './product-item.html',
    styleUrls: ['./product-item.scss']
})
export class ProductItemComponent {
    @Input() product: {name: string, description: string, short_description: string, category: string, image: string, slug: string};
}
