import {Component, Input} from '@angular/core';
import {ModalService} from "../shared/modal/modal.service";
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {ConfirmConfig, ModalStatus} from "../shared/modal/modal.model";
import {Router} from "@angular/router";
import {EditPasswordComponent} from "./edit-password.component";

@Component({
  selector: 'app-main-user-tools',
  templateUrl: './main-user-tools.component.html'
})
export class MainUserToolsComponent {
  @Input() username: string;
  @Input() src: string;

  constructor(private modalService: ModalService, private router: Router, private ngbModal: NgbModal) {
  }

  userInfo() {
    alert(1);
  }

  editPassword() {
    this.ngbModal.open(EditPasswordComponent, {size: 'lg'});
    // 需要执行回调时调用其result属性的then方法
    // this.ngbModal.open(EditPasswordComponent, {size: 'lg'}).result.then(result => {}, reason => {});
  }

  logout() {
    this.modalService.confirm(new ConfirmConfig('您确定退出系统吗？')).then((result: ModalStatus) => {
      if (result === ModalStatus.APPROVED) {
        this.router.navigate(['/login']);
      }
    }, reason => {});
  }
}
