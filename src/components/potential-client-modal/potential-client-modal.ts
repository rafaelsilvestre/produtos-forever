import { Component, Input } from '@angular/core';

@Component({
    selector: 'potential-client-modal',
    templateUrl: './potential-client-modal.html',
    styleUrls: ['./potential-client-modal.scss']
})
export class PotentialClientModalComponent {
    @Input() show = false;
}
