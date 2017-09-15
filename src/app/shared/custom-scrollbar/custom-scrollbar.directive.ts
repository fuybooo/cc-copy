import {Directive, AfterViewInit, OnDestroy, Input, EventEmitter, Output, ElementRef} from '@angular/core';
declare let $: any;
@Directive({
  selector: '[appCustomScrollbar]'
})
export class CustomScrollbarDirective implements AfterViewInit, OnDestroy {
  // 默认的配置
  @Input() options: any = {
    axis: 'y',
    theme: 'minimal-dark',
    autoDraggerLength: true,
    scrollInertia: 500
  };
  @Output() onViewInit = new EventEmitter();
  private scrollbarInstance: any;
  constructor(private elementRef: ElementRef) {}
  ngAfterViewInit() {
    this.createScrollbar();
  }
  ngOnDestroy() {
    this.scrollbarInstance.mCustomScrollbar('destroy');
  }
  createScrollbar() {
    this.scrollbarInstance = $(this.elementRef.nativeElement).mCustomScrollbar(this.options);
    this.onViewInit.emit(this.scrollbarInstance);
  }
  getScrollbarInstance(): any {
    return this.scrollbarInstance;
  }
}
