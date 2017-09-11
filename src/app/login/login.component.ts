import { Component, OnInit } from '@angular/core';
import {TipService} from "../tip/tip.service";
import {TipConfig, TipType} from "../tip/tip.model";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private tipService: TipService) {}
  ngOnInit() {
  }
  login(): void {
    this.tipService.tip(new TipConfig(TipType.SUCCESS, '', '点击登录成功', 2000));
  }

}
