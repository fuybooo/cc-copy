import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";
import {ActivatedRoute} from "@angular/router";
declare let $;
@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html'
})
export class GridDemoComponent implements OnInit {
  constructor(private appService: AppService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // 设置main中的标题
    this.appService.emitTitle(this.route);
    $('#grid-demo-grid1').bootstrapTable({
      data: [{
        a: 1,
        b: 1
      }, {
        a: 2,
        b: 2
      }],
      columns: [
        {
          field: 'a',
          title: 'a'
        },
        {
          field: 'b',
          title: 'b'
        },
      ]
    });
  }
  add() {
    console.log('add');
  }
}
