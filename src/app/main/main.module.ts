import {NgModule} from "@angular/core";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {MainRoutingModule} from "./main-routing.module";
import {MainComponent} from "./main.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MainNavComponent} from "./main-nav.component";
import {MainTreeViewComponent} from "./main-tree-view.component";
import {SharedModule} from "../shared/shared.module";
import {PinyinService} from "../shared/util/pinyin.service";
import {MainUserToolsComponent} from "./main-user-tools.component";
import {EditPasswordComponent} from "./edit-password.component";
import {PasswordValidatorComponent} from "../shared/custom-validators/password-validator.component";
import {PasswordValidatorDirective} from "../shared/custom-validators/password-validator.directive";
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    SharedModule,
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
    MainNavComponent,
    MainTreeViewComponent,
    MainUserToolsComponent,

    EditPasswordComponent,
    PasswordValidatorComponent,
    PasswordValidatorDirective
  ],
  entryComponents: [
    EditPasswordComponent
  ],
  providers: [
    PinyinService
  ]
})
export class MainModule {
}
