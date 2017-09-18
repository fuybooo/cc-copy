import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";
import {ActivatedRoute} from "@angular/router";
import {ModalService} from "../../shared/modal/modal.service";
import {AlertConfig, AlertType, ModalStatus} from "../../shared/modal/modal.model";
import {CustomModalComponent} from "./custom-modal.component";
import {NgbModal, NgbModalRef} from "@ng-bootstrap/ng-bootstrap";
import {CommonModalComponent} from "../../shared/common/common-modal.component";
/**
 * 模态框demo
 */
@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html'
})
export class ModalDemoComponent implements OnInit {
  constructor(private appService: AppService,
              private route: ActivatedRoute,
              private modalService: ModalService,
              private ngbModal: NgbModal) {
  }

  ngOnInit() {
    // 设置main中的标题
    this.appService.emitTitle(this.route);
  }

  modal(type: number) {
    switch (type) {
      case 1:
        this.modalService.alertInfo();
        break;
      case 2:
        this.modalService.alertWarning();
        break;
      case 3:
        this.modalService.alertError();
        break;
      case 4:
        this.modalService.confirm();
        break;
      case 5:
        this.modalService.alertInfo('info');
        break;
      case 6:
        this.modalService.alertWarning('warning');
        break;
      case 7:
        this.modalService.alertError('error');
        break;
      case 8:
        this.modalService.confirm('confirm');
        break;
      case 9:
        this.modalService.alertInfo('点击确认会弹出一个提示').then((result: ModalStatus) => {
          alert('确认执行回调函数' + result);
        }, (result: ModalStatus) => {
          alert('关闭执行回调' + result);
        });
        break;
      case 10:
        this.modalService.confirm('点击确认或取消都会弹出一个提示').then((result: ModalStatus) => {
          alert('确认的回调，确认的key：' + result);
        }, (result: ModalStatus) => {
          alert('取消的回调，取消的key：' + result);
        });
        break;
      case 11:
        this.ngbModal.open(CustomModalComponent, {size: 'lg'}).result.then((result) => {
          alert('确定的回调：' + result);
        }, (result) => {
          alert('取消的回调：' + result);
        });
        break;
      case 12:
        let modalRef: NgbModalRef = this.ngbModal.open(CommonModalComponent, {windowClass: 'ngb-modal-1'});
        modalRef.componentInstance.componentName = 'demoCustomModal';
        modalRef.componentInstance.modalTitle = 'ngb-modal-1';
        modalRef.componentInstance.ok = function() {
          alert('click ok');
        };
    }
  }
}
