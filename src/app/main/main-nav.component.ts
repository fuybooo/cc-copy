import {Component, Input, OnInit} from '@angular/core';
import {MenuData} from "./main.model";
declare let $: any;

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html'
})
export class MainNavComponent implements OnInit {
  @Input() data: Array<MenuData>;
  searchText = '';
  searchMsgHidden = true;
  private originData: Array<MenuData> = [];

  constructor() {
  }

  ngOnInit() {
    // 利用jquery对对象（数组）进行深拷贝，但是感觉这种做法很不typescript
    this.originData = $.extend(true, [], this.data);
  }

  searchMenu() {
    // 根据输入的值查询菜单数据
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
