import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {TipConfig, TipType} from "./tip.model";

interface TipStyle {
  bg?: string;
  fa?: string;
}

@Component({
  selector: 'app-tip',
  templateUrl: './tip.component.html'
})
export class TipComponent implements OnInit {
  @Input() config = new TipConfig(TipType.SUCCESS, '', '');
  @Output() dismissed = new EventEmitter<any>();

  constructor() {
  }

  ngOnInit() {
    if (this.config.isAutoDismiss()) {
      setTimeout(() => this.dismiss(), this.config.getAutoDismissTime());
    }
  }
  getTipStyle(): TipStyle {
    let tipStyle: TipStyle = {};
    const tipType = this.config.getTipType();
    switch (tipType) {
      case TipType.SUCCESS:
        tipStyle = {
          bg: 'bg-success',
          fa: 'fa-check-circle'
        };
        break;
      case TipType.INFO:
        tipStyle = {
          bg: 'bg-info',
          fa: 'fa-info-circle'
        };
        break;
      case TipType.WARNING:
        tipStyle = {
          bg: 'bg-warning',
          fa: 'fa-warning'
        };
        break;
      case TipType.ERROR:
        tipStyle = {
          bg: 'bg-danger',
          fa: 'fa-times-circle'
        };
        break;
    }
    return tipStyle;
  }
  isDismissEnabled(): boolean {
    return this.config.isDismissEnable();
  }
  dismiss(): void {
    this.dismissed.emit();
  }
}

