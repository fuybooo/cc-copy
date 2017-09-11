import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';
@Injectable()
export class LoadingService {
  private loadingSubject = new Subject<boolean>();
  getLoading(): Observable<boolean> {
    return this.loadingSubject;
  }
  loading(showLoading: boolean): void {
    this.loadingSubject.next(showLoading);
  }
}
