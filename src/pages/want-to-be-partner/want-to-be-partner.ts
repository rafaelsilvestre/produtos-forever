import { Component, Input } from '@angular/core';

@Component({
    selector: 'page-want-to-be-partner',
    templateUrl: './want-to-be-partner.html',
    styleUrls: ['./want-to-be-partner.scss']
})
export class WantToBePartnerPageComponent {
    path: Array<any> = [
        {path: '/', title: 'Home'},
        {path: '/quero-ser-parceiro', title: 'Quero ser parceiro', active: true}
    ];
}

