export enum ModalStatus {
  CLOSED, DECLINED, APPROVED
}
export enum AlertType {
  INFO, ERROR, WARNING
}
export class ConfirmConfig {
  constructor(public content: string = '',
              public declineBtnCls: string = 'btn-secondary',
              public declineBtnText: string = '取消',
              public approveBtnCls: string = 'btn-primary',
              public approveBtnText: string = '确定') {
  }

  getContent(): string {
    return this.content;
  }

  getDeclineBtnCls(): string {
    return this.declineBtnCls;
  }

  getDeclineBtnText(): string {
    return this.declineBtnText;
  }

  getApproveBtnCls(): string {
    return this.approveBtnCls;
  }

  getApproveBtnText(): string {
    return this.approveBtnText;
  }
}

export class AlertConfig {
  constructor(public type: AlertType = AlertType.WARNING,
              public title: string = '',
              public content: string = '',
              public approveBtnCls: string = 'btn-primary',
              public approveBtnText: string = '确定'
  ) {}
  getType(): AlertType {
    return this.type;
  }
  getTitle(): string {
    return this.title;
  }
  getContent(): string {
    return this.content;
  }
  getApproveBtnCls(): string {
    return this.approveBtnCls;
  }
  getApproveBtnText(): string {
    return this.approveBtnText;
  }
}
