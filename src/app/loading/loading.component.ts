import {Component, OnInit} from '@angular/core';
import {LoadingService} from "./loading.service";

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html'
})
export class LoadingComponent implements OnInit {
  showLoading = false;
  count = 0;

  constructor(private loadingService: LoadingService) {
    this.loadingService.getLoading().forEach((showLoading: boolean) => {
      if (showLoading) {
        this.openLoading();
      } else {
        this.closeLoading();
      }
    });
  }

  ngOnInit() {
  }

  private openLoading(): void {
    if (!this.showLoading) {
      this.showLoading = true;
    }
    this.count++;
  }

  private closeLoading(): void {
    this.count--;
    if (this.count <= 0) {
      this.showLoading = false;
      this.count = 0;
    }
  }

}
