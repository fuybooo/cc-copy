import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DemoComponent} from "./demo.component";
import {TipDemoComponent} from "./tip-demo.component";
import {ModalDemoComponent} from "./modal-demo.component";
const demoRoutes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {path: 'tipDemo/:_t', component: TipDemoComponent},
      {path: 'modalDemo/:_t', component: ModalDemoComponent},
    ]
  }
];
@NgModule({
  imports: [
    RouterModule.forChild(demoRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule {}
