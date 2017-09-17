import {Component, OnChanges} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {TipService} from "../tip/tip.service";
import {TipConfig, TipType} from "../tip/tip.model";
import {ModalStatus} from "../shared/modal/modal.model";
import {passwordValidator, equalValidator} from "../shared/custom-validators/password-validator.directive";

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html'
})
export class EditPasswordComponent {
  passwordForm = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(6),
      Validators.maxLength(16),
      passwordValidator()
    ]),
    passwordGroup: new FormGroup({
      newPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
        passwordValidator()
      ]),
      confirmNewPassword: new FormControl('', [
        Validators.required,
        Validators.minLength(6),
        Validators.maxLength(16),
        passwordValidator()
      ]),
    }, equalValidator())
  });

  constructor(private activeModal: NgbActiveModal, private tipService: TipService, private formBuilder: FormBuilder) {
  }
  ok() {
    this.tipService.tip(new TipConfig(TipType.SUCCESS, '', '修改密码成功！', 2000));
    this.close();
  }

  close() {
    this.activeModal.dismiss(ModalStatus.CLOSED);
  }

  get oldPassword(): FormControl {
    return this.passwordForm.get('oldPassword') as FormControl;
  }

  get passwordGroup(): FormGroup {
    return this.passwordForm.get('passwordGroup') as FormGroup;
  }
  get newPassword(): FormControl {
    return this.passwordGroup.get('newPassword') as FormControl;
  }

  get confirmNewPassword(): FormControl {
    return this.passwordGroup.get('confirmNewPassword') as FormControl;
  }
}


