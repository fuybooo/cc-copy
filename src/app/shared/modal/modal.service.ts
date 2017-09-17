import {Injectable} from '@angular/core';
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {AlertConfig, AlertType, ConfirmConfig} from "./modal.model";
import {ConfirmComponent} from "./confirm.component";
import {AlertComponent} from "./alert.component";
@Injectable()
export class ModalService {
  constructor(private modalService: NgbModal) {}
  confirm(confirmConfig: any = '确认删除？'): Promise<any> {
    let config: ConfirmConfig;
    if (typeof confirmConfig === 'string') {
      config = new ConfirmConfig(confirmConfig);
    } else {
      config = confirmConfig;
    }
    const modalRef: NgbModalRef = this.modalService.open(ConfirmComponent);
    modalRef.componentInstance.config = config;
    return modalRef.result;
  }
  alert(alertConfig: any = '没有权限！', alertType: AlertType = AlertType.WARNING): Promise<any> {
    let config: AlertConfig;
    if (typeof alertConfig === 'string') {
      config = new AlertConfig(alertType, '', alertConfig);
    } else {
      config = alertConfig;
    }
    const modalRef: NgbModalRef = this.modalService.open(AlertComponent);
    modalRef.componentInstance.config = config;
    return modalRef.result;
  }
  alertInfo(msg: string = '默认提示'): Promise<any> {
    return this.alert(msg, AlertType.INFO);
  }
  alertError(msg: string = '默认错误提示'): Promise<any> {
    return this.alert(msg, AlertType.ERROR);
  }
  alertWarning(msg: string = '默认警告提示'): Promise<any> {
    return this.alert(msg, AlertType.WARNING);
  }
}
