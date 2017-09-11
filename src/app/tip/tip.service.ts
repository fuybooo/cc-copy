import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
import {TipConfig} from "./tip.model";
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
}
