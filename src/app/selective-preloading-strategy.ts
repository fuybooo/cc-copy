import {PreloadingStrategy, Route} from "@angular/router";
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx';
/**
 * 选择性预加载策略
 **/

export class SelectivePreloadingStrategy implements PreloadingStrategy {
  preload(route: Route, load: Function): Observable<any> {
    return route.data && route.data.preload === false ? Observable.of(null) : load();
  }
}
