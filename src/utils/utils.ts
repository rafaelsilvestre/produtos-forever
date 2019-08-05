import { CategoryPageComponent } from '../pages/category/category';

export default class Utils {

    public static END_POINT_URL = 'http://endpoint.produtosforever.com.br';
    public static EP_ALL_PRODUCTS = Utils.END_POINT_URL + '/?products=all';
    public static EP_BEST_SELLERS_PRODUCTS = Utils.END_POINT_URL + '/?products=best-sellers';
    public static EP_CATEGORY_PRODUCTS = Utils.END_POINT_URL + '/?products=category&category=';

    /**
     * Generates phone mask to use in forms.
     * @returns (rawData:any)
     */
    public static getPhoneMask() {
        return function (rawData) {
            const treatedPhone = rawData.replace(/\D+/g, '');
            if (treatedPhone.length === 11) {
                return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            } else if (treatedPhone.length === 0) {
                return '';
            } else {
                return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
            }
        };
    }

    /**
     * Generates cpf number to use in forms.
     * @returns (rawData:any)
     */
    public static getCpfNumber() {
        return function (rawData) {
            return [/\d/, /\d/, /\d/,'.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-',/\d/, /\d/];

        };
    }

    /**
     * Generates CEP mask to use in forms.
     * @returns {[RegExp,RegExp,RegExp,RegExp,RegExp,string,RegExp,RegExp,RegExp]}
     */
    public static getCepMask() {
        return [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
    }

    /**
     * Generates money mask to use in forms.
     * @returns {(rawData:any)=>Array<any>}
     */
    public static getMoneyMask() {
        return function (rawData) {
            const staticMask: Array<string> = ['R', '$', ' '];
            const moneyMask: Array<any> = ['R', '$', ' '];
            const dotChars: Array<string> = [',', '.'];
            let qtdAfterDot = 2;
            let alreadyAddedDot = false;
            if (rawData) {
                for (let i = 0; i < rawData.length; i++) {
                    if (staticMask.indexOf(rawData[i]) >= 0) {
                        continue;
                    }

                    if (dotChars.indexOf(rawData[i]) >= 0) {
                        if (!alreadyAddedDot) {
                            moneyMask.push(',');
                            alreadyAddedDot = true;
                        }
                        continue;
                    }

                    if (alreadyAddedDot) {
                        if (qtdAfterDot > 0) {
                            moneyMask.push(/\d/);
                            qtdAfterDot--;
                        }
                    } else {
                        moneyMask.push(/\d/);
                    }
                }
                return moneyMask;
            }
            return '';
        };
    }

    /**
     * Fix phone number with 9th digit.
     * @param phoneNumber - Phone number entered by user.
     * @returns {string} - Fixed 9th digit phone number.
     */
    public static adjustPhoneNumber(phoneNumber): string {
        if (phoneNumber == null) {
            return null;
        }

        phoneNumber = phoneNumber.replace(/\D+/g, '');
        // Special treatment for fixed numbers
        if((phoneNumber.length == 10 && Number(phoneNumber.substring(2, 3)) < 6) ||
            (phoneNumber.length == 12 && phoneNumber.indexOf('55') == 0 && Number(phoneNumber.substring(4, 5)) < 6))
        {
            return phoneNumber;
        }

        if (phoneNumber.length == 10) {
            // Fix number without country code
            return phoneNumber.substring(0, 2) + '9' + phoneNumber.substring(2);
        } else if (phoneNumber.length == 12 && phoneNumber.indexOf('55') == 0) {
            // Fix Brazil number with country code
            return phoneNumber.substring(0, 4) + '9' + phoneNumber.substring(4);
        } else {
            return phoneNumber;
        }
    }

    /**
     * Generates phone id based on mask input data.
     * @param phoneNumber
     * @returns {string}
     */
    public static generatePhoneIdFromMask(phoneNumber) {
        let adjustedNumber = Utils.adjustPhoneNumber(phoneNumber);
        if (adjustedNumber == null) {
            adjustedNumber = '';
        }
        return '55' + adjustedNumber.substr(0, 11);
    }

    public static getMonthMask() {
        return function (rawData) {
            return [/\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/];
        }
    }
}
