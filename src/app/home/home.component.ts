import { Component, OnInit } from '@angular/core';
import {LoadingService} from "../loading/loading.service";
import {TodoData, TodoObjData} from "./home.model";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  userTipClose = false;
  isTodoCollapsed = false;
  todoObj: TodoObjData = new TodoObjData(4, [
    new TodoData(1, '脱胎换骨1，你伤害了我，却一笑而过', '老王1', '2017-09-17'),
    new TodoData(2, '脱胎换骨2', '老王2', '2017-09-17'),
    new TodoData(3, '脱胎换骨3', '老王3', '2017-09-17'),
    new TodoData(4, '脱胎换骨4', '老王4', '2017-09-17'),
  ]);
  constructor(private loadingService: LoadingService) {
    // 模拟加载延迟
    setTimeout(() => this.loadingService.loading(false), 500);
  }

  ngOnInit() {
  }
  editPassword() {

  }

}
