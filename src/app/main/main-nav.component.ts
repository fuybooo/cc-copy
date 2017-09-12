import {Component, Input, OnInit} from '@angular/core';
import {MenuData} from "./main.model";

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html'
})
export class MainNavComponent implements OnInit {
  @Input() data: Array<MenuData>;
  searchText = '';
  searchMsgHidden = true;

  constructor() {
  }

  ngOnInit() {
  }

  searchMenu() {
    alert('search');
  }

  itemClicked(item: MenuData) {
    if (!this.isLeaf(item)) {
      for (const menu of this.data) {
        if (menu.id !== item.id) {
          menu.isExpend = false;
        }
      }
      item.isExpend = !item.isExpend;
    }
  }

  isLeaf(item: MenuData): boolean {
    return !item.children || !item.children.length;
  }
}
