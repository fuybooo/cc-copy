import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomScrollbarDirective} from "./custom-scrollbar/custom-scrollbar.directive";
import {ConfirmComponent} from "./modal/confirm.component";
import {AlertComponent} from "./modal/alert.component";
import {ModalService} from "./modal/modal.service";
import {EditPasswordComponent} from "../main/edit-password.component";
import {PasswordValidatorDirective} from "./custom-validators/password-validator.directive";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule
  ],
  declarations: [
    CustomScrollbarDirective,
    ConfirmComponent,
    AlertComponent,
    // PasswordValidatorDirective
  ],
  providers: [ModalService],
  entryComponents: [
    ConfirmComponent,
    AlertComponent,
    // EditPasswordComponent
  ],
  exports: [
    CustomScrollbarDirective,
    ConfirmComponent,
    AlertComponent
  ]
})
export class SharedModule {
}
