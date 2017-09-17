import {EventEmitter, Injectable} from "@angular/core";
import {ActivatedRoute, ParamMap} from "@angular/router";
@Injectable()
export class AppService {
  titleEventEmitter: EventEmitter<string>;
  constructor() {
    this.titleEventEmitter = new EventEmitter();
  }
  emitTitle(route: ActivatedRoute) {
    route.paramMap.subscribe((params: ParamMap) => this.titleEventEmitter.emit(params.get('_t')));
  }
}
