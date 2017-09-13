import {Component, Input, OnInit} from '@angular/core';
import {MenuData} from "./main.model";
import {PinyinService} from "../shared/util/pinyin.service";
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

  constructor(private pinyinService: PinyinService) {
  }

  ngOnInit() {
    // 利用jquery对对象（数组）进行深拷贝，但是感觉这种做法很不typescript
    this.originData = $.extend(true, [], this.data);
  }

  // 根据输入的值查询菜单数据
  searchMenu() {
    if (this.searchText.trim() === '') {
      return;
    }
    let resultMenu: Array<MenuData> = [];
    let resultMenuIds: Array<string> = [];
    for (let item of this.originData) {
      this.getResultMenu(item, resultMenu, resultMenuIds);
    }
    this.data = resultMenu.length ? resultMenu : this.data;
    this.searchMsgHidden = !resultMenu.length;
  }

  getResultMenu(menuData: MenuData, menuList: Array<MenuData>, menuIds: Array<string>) {
    // 将符合条件的并且不再list中的菜单加入到list中去
    if (menuData.name.indexOf(this.searchText) !== -1 && !this.checkMenuIn(menuData, menuIds)) {
      menuList.push(menuData);
      this.getResultMenuIds(menuData, menuIds);
    } else {
      let children = menuData.children;
      if (children && children.length) {
        for (let sub of children) {
          this.getResultMenu(sub, menuList, menuIds);
        }
      }
    }
  }
  getResultMenuIds(menuData: MenuData, menuIds: Array<string>) {
    menuIds.push(menuData.id);
    let children = menuData.children;
    if (children && children.length) {
      for (let sub of children) {
        this.getResultMenuIds(sub, menuIds);
      }
    }
  }
  checkMenuIn(menuData: MenuData, menuIds: Array<string>): boolean {
    for (let id in menuIds) {
      if (menuData.id === id) {
        return true;
      }
    }
    return false;
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
