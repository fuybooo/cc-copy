import { Component, OnInit } from '@angular/core';
import {LoadingService} from "../loading/loading.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(private loadingService: LoadingService) {
    // 模拟加载延迟
    setTimeout(() => this.loadingService.loading(false), 500);
  }

  ngOnInit() {
  }

}
