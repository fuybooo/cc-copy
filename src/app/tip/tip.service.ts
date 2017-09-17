import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {TipConfig, TipType} from "./tip.model";
/**
 * tip服务
 **/
@Injectable()
export class TipService {
  private tipSubject = new Subject<TipConfig>();
  constructor() {}
  getTips(): Observable<TipConfig> {
    return this.tipSubject;
  }
  tip(tipConfig: TipConfig): void {
    this.tipSubject.next(tipConfig);
  }
  info(msg?: string): void {
    this.tipSubject.next(new TipConfig(TipType.INFO, '', msg || '请填写必填内容！', 2000));
  }
  success(msg?: string): void {
    this.tipSubject.next(new TipConfig(TipType.SUCCESS, '', msg || '操作成功！', 2000));
  }
  warning(msg?: string): void {
    this.tipSubject.next(new TipConfig(TipType.WARNING, '', msg || '有错误内容，请修改！', 2000));
  }
  error(msg?: string): void {
    this.tipSubject.next(new TipConfig(TipType.ERROR, '', msg || '操作失败！', 2000));
  }
}
