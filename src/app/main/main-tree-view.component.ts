import { Component, OnInit, Input } from '@angular/core';
import {MenuData} from "./main.model";
@Component({
  selector: 'app-main-tree-view',
  templateUrl: './main-tree-view.component.html'
})
export class MainTreeViewComponent implements OnInit {
  @Input() data: Array<MenuData>;
  searchText = '';
  searchMsgHidden = true;
  constructor() {}
  ngOnInit() {
  }
  searchMenu() {
    alert('search');
  }
  itemClicked(item: MenuData) {
    if (!this.isLeaf(item)) {
      item.isExpend = !item.isExpend;
    }
  }
  isLeaf(item: MenuData): boolean {
    return !item.children || !item.children.length;
  }
}
