import { Component, OnInit, Input } from '@angular/core';
import {MenuData} from "./main.model";
import {Router} from "@angular/router";
import {AppService} from "../app.service";
@Component({
  selector: 'app-main-tree-view',
  templateUrl: './main-tree-view.component.html'
})
export class MainTreeViewComponent implements OnInit {
  @Input() data: MenuData;
  constructor(private router: Router, private appService: AppService) {}
  ngOnInit() {
  }
  itemClicked(item: MenuData) {
    if (!this.isLeaf(item)) {
      item.isExpend = !item.isExpend;
    } else {
      // todo 如何做到在跳转页面后将MainComponent中的title变为item的name
      // this.appService.titleEventEmitter.emit(item.name);
      this.router.navigate([item.url, item.name]);
    }
  }
  isLeaf(item: MenuData): boolean {
    return !item.children || !item.children.length;
  }
}
