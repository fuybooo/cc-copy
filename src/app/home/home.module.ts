import {NgModule} from "@angular/core";
import {HomeRoutingModule} from "./home-routing.module";
import {HomeComponent} from "./home.component";
import {CommonModule} from "@angular/common";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  imports: [
    CommonModule, // ngFor等指令
    NgbModule, // bgn指令
    HomeRoutingModule
  ],
  declarations: [
    HomeComponent
  ]
})
export class HomeModule {
}
