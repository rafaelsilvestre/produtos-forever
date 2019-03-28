import { Component } from '@angular/core';

@Component({
    selector: 'page-contact',
    templateUrl: './contact.html',
    styleUrls: ['./contact.scss']
})
export class ContactPageComponent {
    path: Array<any> = [
        {path: '/', title: 'Home'},
        {path: '/fale-conosco', title: 'Contato', active: true}
    ];
}

