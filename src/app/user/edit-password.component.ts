import {Component} from '@angular/core';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {FormBuilder, Validators, FormGroup, FormControl} from '@angular/forms';
import {TipService} from "../tip/tip.service";
import {TipConfig, TipType} from "../tip/tip.model";
import {ModalStatus} from "../shared/modal/modal.model";
import {passwordValidator} from "../shared/custom-validators/password-validator.directive";

@Component({
  selector: 'app-edit-password',
  templateUrl: './edit-password.component.html'
})
export class EditPasswordComponent {
  // passwordForm = this.formBuilder.group({
  //     oldPassword: ['', [
  //       Validators.required,
  //       passwordValidator()
  //     ]],
  //     newPassword: ['', [
  //       Validators.required,
  //       passwordValidator()]
  //     ],
  //     confirmNewPassword: ['', [
  //       Validators.required,
  //       passwordValidator()]
  //     ]
  //   });
  passwordForm = new FormGroup({
    oldPassword: new FormControl('', [
      Validators.required,
      passwordValidator()
    ]),
    newPassword: new FormControl('', [
      Validators.required,
      passwordValidator()
    ]),
    confirmNewPassword: new FormControl('', [
      Validators.required,
      passwordValidator()
    ]),
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
}


