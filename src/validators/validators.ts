import { AbstractControl, ValidatorFn } from '@angular/forms';
import Utils from '../utils/utils';

export function numberValidator(): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const value = control.value;
        const number = value.replace(/\ /g, '');
        return (number.length === 14 || !isNaN(number)) ? null : {'numberValidator': {value}};
    };
}

export function phoneNumberValidator(includeFixedNumbers: boolean = false): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
        const value = control.value;
        return checkPhoneNumber(value, includeFixedNumbers);
    };
}

export function checkPhoneNumber(value, includeFixedNumbers: boolean = false) {
    const rawPhone = Utils.adjustPhoneNumber(value);
    const regExp = includeFixedNumbers ? /^[1-9]{2,4}[1-9]{1}[0-9]{3,4}[0-9]{4}$/ :
        /^[1-9]{2,4}[9]{1}[1-9]{1}[0-9]{3}[0-9]{4}$/;
    const fixedCheck = includeFixedNumbers ? rawPhone.length === 10 : true;
    const itsOk = (rawPhone.length === 11 || rawPhone.length === 13 || fixedCheck) && regExp.test(rawPhone);
    return itsOk ? null : {'phoneNumberValidator': true};
}
