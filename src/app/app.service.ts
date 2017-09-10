import {EventEmitter, Injectable} from "@angular/core";
@Injectable()
export class AppService {
  titleEventEmitter: EventEmitter<string>;
  constructor() {
    this.titleEventEmitter = new EventEmitter();
  }
}
