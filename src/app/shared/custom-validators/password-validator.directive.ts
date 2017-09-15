import {Directive} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator, ValidatorFn} from '@angular/forms';

export function passwordValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    console.log('passwordValidator:',control);
    // 密码限制
    // 1.不允许输入空格、非字母或键盘上的可见符号
    // 2.长度在6-16之间
    // 3.复杂度：必须包含数字、字母或者符号中的至少两种
    let isValid = false;
    if (control.value === '') {
      return null;
    }
    for (let i = 0; i < control.value.length; i++) {
      let code = control.value[i].charCodeAt(0);
      if (code < 33 || code > 126) {
        isValid = false;
      }
    }
    if (isValid) {
      let letters = /[a-zA-Z]/; // 52个字母
      let numbers = /[0-9]/; // 10个数字
      let chars = '`-=[]\\;\',./~!@#$%^&*()_+{}|:"<>?'; // 32个特殊字符
      let hasChars = control.value.split('').filter(item => chars.indexOf(item) !== -1).length;
      let hasNumbers = numbers.test(control.value);
      let hasLetters = letters.test(control.value);
      let isComplex = (!hasLetters && hasNumbers && hasChars > 0) ||
        (!hasNumbers && hasLetters && hasChars > 0) ||
        (hasChars === 0 && hasLetters && hasNumbers);
      if (control.value.length < 6 ||
        control.value.length > 16 || !isComplex) {
        isValid = false;
      }
    }
    return isValid ? {'passwordValidator': {value: control.value}} : null;
  };
}

@Directive({
  selector: '[appPasswordValidator]',
  providers: [{provide: NG_VALIDATORS, useExisting: PasswordValidatorDirective, multi: true}]
})
export class PasswordValidatorDirective implements Validator {
  validate(control: AbstractControl): { [key: string]: any } {
    return passwordValidator()(control);
  }
}
