import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { numberValidator } from '../../validators/validators';
import Utils from '../../utils/utils';

@Component({
    selector: 'receive-calls',
    templateUrl: './receive-calls.html',
    styleUrls: ['./receive-calls.scss']
})
export class ReceiveCallsComponent {
    phoneMask = Utils.getPhoneMask();
    formGroup: FormGroup;

    constructor(private formBuilder: FormBuilder){
        this.formGroup = this.formBuilder.group({
            name: ['', [Validators.required]],
            email: ['', Validators.required],
            phone: ['', [Validators.required, numberValidator()]]
        });
    }

    doSending(): void {
        alert('Enviando...');
    }
}

