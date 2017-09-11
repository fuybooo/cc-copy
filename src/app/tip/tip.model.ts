/**
 * 提示类型
 **/

export enum TipType {
  SUCCESS, INFO, WARNING, ERROR
}

export class TipConfig {
  constructor(private tipType: TipType,
              private textStrong: string = '',
              private text: string = '',
              private autoDismissTime: number = 0,
              private dismissable: boolean = true) {
  }

  getTipType(): TipType {
    return this.tipType;
  }
  getText(): string {
    return this.text;
  }
  getTextStrong(): string {
    return this.textStrong;
  }
  getAutoDismissTime(): number {
    return this.autoDismissTime;
  }
  getDismissable(): boolean {
    return this.dismissable;
  }
  isDismissEnable(): boolean {
    return this.dismissable || this.autoDismissTime === 0;
  }
  isAutoDismiss(): boolean {
    return this.autoDismissTime > 0;
  }
}
