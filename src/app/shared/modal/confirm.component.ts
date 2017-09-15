import {Component, Input, ViewEncapsulation} from '@angular/core';
import {ConfirmConfig, ModalStatus} from "./modal.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  encapsulation: ViewEncapsulation.None
})
export class ConfirmComponent {
  @Input() config: ConfirmConfig;
  constructor(public activeModal: NgbActiveModal) {}
  decline() {
    this.activeModal.dismiss(ModalStatus.DECLINED);
  }
  close() {
    this.activeModal.dismiss(ModalStatus.CLOSED);
  }
  approve() {
    this.activeModal.close(ModalStatus.APPROVED);
  }
}
