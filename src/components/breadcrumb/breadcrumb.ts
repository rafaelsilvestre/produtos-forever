import { Component, Input } from '@angular/core';

@Component({
    selector: 'breadcrumb',
    templateUrl: './breadcrumb.html',
    styleUrls: ['./breadcrumb.scss']
})
export class BreadcrumbComponent {
    @Input('paths') paths: Array<any>;
}

