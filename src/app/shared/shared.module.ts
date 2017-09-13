import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CustomScrollbarDirective} from "./directives/custom-scrollbar.directive";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    NgbModule
  ],
  declarations: [
    CustomScrollbarDirective
  ],
  exports: [
    CustomScrollbarDirective
  ]
})
export class SharedModule {
}
