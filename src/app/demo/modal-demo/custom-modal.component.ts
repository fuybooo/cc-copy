import {Component} from "@angular/core";
import {NgbActiveModal} from "@ng-bootstrap/ng-bootstrap";
import {ModalStatus} from "../../shared/modal/modal.model";

/**
 * 自定义弹出层组件，按钮，title等所有元素都重写。
 */
@Component({
  selector: 'app-custom-modal',
  templateUrl: './custom-modal.component.html'
})
export class CustomModalComponent {
  info: string;
  constructor(private activeModal: NgbActiveModal) {}
  ok() {
    alert('执行弹出组件中的提交方法，输入的数据' + this.info);
    this.activeModal.dismiss(ModalStatus.APPROVED);
  }
  close() {
    this.activeModal.dismiss(ModalStatus.CLOSED);
  }
}
