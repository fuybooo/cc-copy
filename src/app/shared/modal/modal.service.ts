import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {AlertConfig, ConfirmConfig} from "./modal.model";
import {ConfirmComponent} from "./confirm.component";
import {AlertComponent} from "./alert.component";
@Injectable()
export class ModalService {
  constructor(private modalService: NgbModal) {}
  confirm(config: ConfirmConfig): Promise<any> {
    const modalRef: NgbModalRef = this.modalService.open(ConfirmComponent);
    modalRef.componentInstance.config = config;
    return modalRef.result;
  }
  alert(config: AlertConfig): Promise<any> {
    const modalRef: NgbModalRef = this.modalService.open(AlertComponent);
    modalRef.componentInstance.config = config;
    return modalRef.result;
  }
}
