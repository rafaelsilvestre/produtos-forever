import { Component } from '@angular/core';
import {appRoutesCategories} from '../../app/app-routing.module';

@Component({
    selector: 'header[main]',
    templateUrl: './header.html',
    styleUrls: ['./header.scss']
})
export class HeaderComponent {
    pages: Array<any> = appRoutesCategories;

    constructor() {

    }
}
