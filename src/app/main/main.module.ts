import {NgModule} from "@angular/core";
import {MainRoutingModule} from "./main-routing.module";
import {MainComponent} from "./main.component";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
@NgModule({
  imports: [
    MainRoutingModule,
    NgbModule
  ],
  declarations: [
    MainComponent,
  ]
})
export class MainModule {
}
