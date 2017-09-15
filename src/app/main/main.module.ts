import {NgModule} from "@angular/core";
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import {MainComponent} from "./main.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MainNavComponent} from "./main-nav.component";
import {MainTreeViewComponent} from "./main-tree-view.component";
import {SharedModule} from "../shared/shared.module";
import {PinyinService} from "../shared/util/pinyin.service";
import {MainUserToolsComponent} from "./main-user-tools.component";
@NgModule({
  imports: [
    MainRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule,
    NgbModule
  ],
  declarations: [
    MainComponent,
    MainNavComponent,
    MainTreeViewComponent,
    MainUserToolsComponent
  ],
  providers: [
    PinyinService
  ]
})
export class MainModule {
}
