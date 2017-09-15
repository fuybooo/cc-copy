import {Component, Input} from '@angular/core';
import {ModalService} from "../shared/modal/modal.service";
import {ConfirmConfig, ModalStatus} from "../shared/modal/modal.model";
import {Router} from "@angular/router";

@Component({
  selector: 'app-main-user-tools',
  templateUrl: './main-user-tools.component.html'
})
export class MainUserToolsComponent {
  @Input() username: string;
  @Input() src: string;

  constructor(private modalService: ModalService, private router: Router) {}
  userInfo() {
    alert(1);
  }

  editPassword() {
    alert(2);
  }

  logout() {
    this.modalService.confirm(new ConfirmConfig('您确定退出系统吗？')).then((result: ModalStatus) => {
      if (result === ModalStatus.APPROVED) {
        this.router.navigate(['/login']);
      }
    });
  }
}
