import {Component, OnInit} from '@angular/core';
import {TipConfig} from "./tip.model";
import {TipService} from "./tip.service";
import {trigger, state, style, transition, animate} from "@angular/animations";
import {Input} from "@angular/core";

@Component({
  selector: 'app-tip-box',
  templateUrl: './tip-box.component.html',
  animations: [
    trigger('tipAnimation', [
      state('none', style({})),
      state('decent', style([{opacity: 1}, {maxHeight: 300}])),
      state('fancy', style([{transform: 'translateX(0)'}, {transform: 'translateY(0)'}, {opacity: 1}, {maxHeight: 300}])),
      transition('void => fancy', [
        style({opacity: 0, maxHeight: 0, transform: 'translateY(-100%)'}),
        animate('300ms ease-in-out')
      ]),
      transition('fancy => void', [
        animate('300ms ease-in-out',
        style({transform: 'translateX(100%)', height: 0, opacity: 0}))
      ]),
      transition('void => decent', [
        style({opacity: 0, maxHeight: 0}),
        animate('300ms ease-in-out')
      ]),
      transition('decent => void', [
        animate('300ms ease-in-out'),
        style({height: 0, opacity: 0})
      ]),
    ])
  ]
})
export class TipBoxComponent implements OnInit {
  @Input() tipAnimation = 'none';
  @Input() tipPosition = 'tip-top-center';
  private tipConfigs: Array<TipConfig> = [];

  constructor(private tipService: TipService) {
    // 获取所有的提示流
    this.tipService.getTips().forEach((config: TipConfig) => {
      this.tipConfigs.unshift(config);
    });
  }

  ngOnInit() {
  }

  getTipConfigs(): Array<TipConfig> {
    return this.tipConfigs;
  }

  remove(tipConfig: TipConfig): void {
    if (this.tipConfigs.includes(tipConfig)) {
      this.tipConfigs.splice(this.tipConfigs.indexOf(tipConfig), 1);
    }
  }
}
