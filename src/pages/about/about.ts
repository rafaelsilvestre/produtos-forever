import { Component } from '@angular/core';

@Component({
    selector: 'page-about',
    templateUrl: './about.html',
    styleUrls: ['./about.scss']
})
export class AboutPageComponent {
    path: Array<any> = [
        {path: '/', title: 'Home'},
        {path: '/quem-somos', title: 'Quem Somos', active: true}
    ];
}

