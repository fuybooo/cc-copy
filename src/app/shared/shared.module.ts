import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomScrollbarDirective} from "./custom-scrollbar/custom-scrollbar.directive";
import {ConfirmComponent} from "./modal/confirm.component";
import {AlertComponent} from "./modal/alert.component";
import {ModalService} from "./modal/modal.service";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  declarations: [
    CustomScrollbarDirective,
    ConfirmComponent,
    AlertComponent
  ],
  providers: [ModalService],
  entryComponents: [ConfirmComponent, AlertComponent],
  exports: [
    CustomScrollbarDirective,
    ConfirmComponent,
    AlertComponent
  ]
})
export class SharedModule {
}
