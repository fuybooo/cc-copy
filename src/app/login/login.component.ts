import { Component, OnInit } from '@angular/core';
import {TipService} from "../tip/tip.service";
import {TipConfig, TipType} from "../tip/tip.model";
import {LoadingService} from "../loading/loading.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private tipService: TipService,
              private loadingServaice: LoadingService,
              private router: Router) {
  }
  ngOnInit() {
  }
  login(): void {
    const tipConfig = new TipConfig(TipType.SUCCESS, '', '点击登录成功', 2000);
    this.tipService.tip(tipConfig);
    this.loadingServaice.loading(true);
    this.router.navigate(['/app/home']);
  }

}
