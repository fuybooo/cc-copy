import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-xxx-demo',
  templateUrl: './xxx-demo.component.html'
})
export class XxxDemoComponent implements OnInit {
  constructor(private appService: AppService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // 设置main中的标题
    this.appService.emitTitle(this.route);
  }
}
