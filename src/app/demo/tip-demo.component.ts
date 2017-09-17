import {Component, OnInit} from "@angular/core";
import {AppService} from "../app.service";
import {TipService} from "../tip/tip.service";
import {ActivatedRoute} from "@angular/router";
import {TipConfig, TipType} from "../tip/tip.model";
@Component({
  selector: 'app-tip-demo',
  templateUrl: './tip-demo.component.html'
})
export class TipDemoComponent implements OnInit {
  constructor(private appService: AppService, private tipService: TipService, private route: ActivatedRoute) {
  }

  ngOnInit() {
    // 设置main中的标题
    this.appService.emitTitle(this.route);
  }

  tip(tipType: string, type?: number) {
    if (tipType === 'success') {
      if (type === 2) {
        this.tipService.success('这是自定义提示内容');
      } else if (type === 3) {
        this.tipService.tip(new TipConfig(TipType.SUCCESS, '成功 ', '这是自定义提示配置', 4000));
      } else {
        // 默认内容
        this.tipService.success();
      }
    } else if (tipType === 'info') {
      if (type === 2) {
        this.tipService.info('这是自定义提示内容');
      } else if (type === 3) {
        this.tipService.tip(new TipConfig(TipType.INFO, '提示 ', '这是自定义提示配置', 4000));
      } else {
        // 默认内容
        this.tipService.info();
      }
    } else if (tipType === 'warning') {
      if (type === 2) {
        this.tipService.warning('这是自定义提示内容');
      } else if (type === 3) {
        this.tipService.tip(new TipConfig(TipType.WARNING, '警告 ', '这是自定义提示配置', 4000));
      } else {
        // 默认内容
        this.tipService.warning();
      }
    } else if (tipType === 'error') {
      if (type === 2) {
        this.tipService.error('这是自定义提示内容');
      } else if (type === 3) {
        this.tipService.tip(new TipConfig(TipType.ERROR, '错误 ', '这是自定义提示配置', 4000));
      } else {
        // 默认内容
        this.tipService.error();
      }
    }

  }
}
