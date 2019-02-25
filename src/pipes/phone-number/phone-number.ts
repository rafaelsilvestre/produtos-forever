import { Pipe, PipeTransform } from '@angular/core';
import { InputMaskDirective } from "../../directives/input-mask/input-mask";
import Utils from '../../utils/utils';

@Pipe({
    name: 'phoneNumber',
})
export class PhoneNumberPipe implements PipeTransform {
    transform(phoneNumber: string, ...args) {
        if(phoneNumber.toString().trim().length == 0) {
            return "";
        }

        let bPhoneWithoutCC = phoneNumber.toString().substring(phoneNumber.length-11, phoneNumber.length);
        let mask = Utils.getPhoneMask();
        return InputMaskDirective.conformValueToMask(bPhoneWithoutCC, mask);
    }
}
