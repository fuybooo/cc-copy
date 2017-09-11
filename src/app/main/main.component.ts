import { Component, OnInit } from '@angular/core';
import {MainData} from "./main.model";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html'
})
export class MainComponent implements OnInit {

  mainData: MainData = {
    userData: {
      username: 'Fuybooo',
      userAvatar: './assets/img/user-header.png',
      mobilePhone: '13588888888',
      email: 'fuybooo@qq.com',
      positions: 'Web前端工程师'
    },
    menuData: [
      {
        id: '1',
        parentId: '0',
        name: '示例',
        keyword: 'demo',
        icon: 'fa-wrench',
        isExpend: false
      }
    ]
  };
  constructor() { }

  ngOnInit() {
  }
  userInfo() {
    alert(1);
  }
  editPassword() {
    alert(2);
  }
  logout() {
    alert(3);
  }
}
