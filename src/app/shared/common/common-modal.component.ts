import {Component, Input} from "@angular/core";
@Component({
  selector: 'app-common-modal',
  templateUrl: 'common-modal.component.html'
})
export class CommonModalComponent {
  @Input() modalTitle = '默认弹出框';
  @Input() componentName = 'default';
  @Input() okBtnText = '确定';
  @Input() closeBtnText = '关闭';
  @Input() ok = function() {
    alert('默认的ok方法');
  };
  close() {
    alert('close');
  }
}
