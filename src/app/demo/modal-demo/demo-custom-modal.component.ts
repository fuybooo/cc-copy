import {Component} from "@angular/core";
@Component({
  selector: 'app-demo-custom-modal',
  templateUrl: 'demo-custom-modal.component.html'
})
/**
 * 自定义模态框的内容部分demo
 * 使用时机：
 * 在需要弹出多信息模态框时，使用通用的模态框CommonModalComponent时，本组件会作为CommonModalComponent的内容部分嵌入到模态框中。
 * title、按钮等元素都是复用CommonModalComponent中的，如果需要使用特殊的弹出框，如按钮数量要求不为2，则可以通过配置来解决，当然需要添加代码逻辑。目前只支持两个按钮。
 */
export class DemoCustomModalComponent {
}
