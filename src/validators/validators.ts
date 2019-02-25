import {AbstractControl, ValidatorFn} from '@angular/forms';

export function numberValidator() : ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const value = control.value;
        let number = value.replace(/\ /g, '');
        return (number.length == 14 || !isNaN(number)) ? null : {'numberValidator': {value}};
    };
}
