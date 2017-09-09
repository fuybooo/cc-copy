import {NgModule} from "@angular/core";
import {MainRoutingModule} from "./main-routing.module";
import {MainComponent} from "./main.component";
@NgModule({
  imports: [
    MainRoutingModule
  ],
  declarations: [
    MainComponent,
  ]
})
export class MainModule {
}