import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";
import {ActivatedRoute} from "@angular/router";
import {single, multi} from './chart-demo-data';

@Component({
  selector: 'app-chart-demo',
  templateUrl: './chart-demo.component.html'
})
export class ChartDemoComponent implements OnInit {

  // 模拟数据
  single: any[];
  multi: any[];
  view: any[] = [700, 400];
  showLegend = true;
  colorScheme = {
    domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
  };
  showLabels = true;
  explodeSlices = false;
  doughnut = false;

  constructor(private appService: AppService, private route: ActivatedRoute) {
    this.single = single;
    this.multi = multi;
  }

  ngOnInit() {
    // 设置main中的标题
    this.appService.emitTitle(this.route);
  }
  onSelect(event) {
    console.log(event);
  }
}
