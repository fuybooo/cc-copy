import {Component, Input, ViewEncapsulation} from '@angular/core';
import {AlertConfig, AlertType, ModalStatus} from "./modal.model";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  encapsulation: ViewEncapsulation.None
})
export class AlertComponent {
  @Input() config: AlertConfig;
  constructor(private activeModal: NgbActiveModal) {}
  isInfo(type: AlertType): boolean {
    return type === AlertType.INFO;
  }
  isWarning(type: AlertType): boolean {
    return type === AlertType.WARNING;
  }
  isError(type: AlertType): boolean {
    return type === AlertType.ERROR;
  }
  close() {
    this.activeModal.dismiss(ModalStatus.CLOSED);
  }
  approve() {
    this.activeModal.close(ModalStatus.APPROVED);
  }
}
