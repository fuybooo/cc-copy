import {Component, OnInit} from "@angular/core";
import {AppService} from "../../app.service";
import {ActivatedRoute} from "@angular/router";
declare let $;
@Component({
  selector: 'app-grid-demo',
  templateUrl: './grid-demo.component.html'
})
export class GridDemoComponent implements OnInit {
  rowData = [
    {make: "Toyota", model: "Celica", price: 35000},
    {make: "Ford", model: "Mondeo", price: 32000},
    {make: "Porsche", model: "Boxter", price: 72000}
  ];
  columnDefs = [
    {headerName: "Make", field: "make"},
    {headerName: "Model", field: "model"},
    {headerName: "Price", field: "price"}
  ];
  constructor(private appService: AppService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // 设置main中的标题
    this.appService.emitTitle(this.route);
  }
  add() {
    console.log('add');
  }
}
