import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {TipService} from "../tip/tip.service";
import {ActivatedRoute} from "@angular/router";
@Component({
  selector: 'app-modal-demo',
  templateUrl: './modal-demo.component.html'
})
export class ModalDemoComponent implements OnInit {
  constructor(private appService: AppService, private tipService: TipService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // 设置main中的标题
    this.appService.emitTitle(this.route);
  }
}
