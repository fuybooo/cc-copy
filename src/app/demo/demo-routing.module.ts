import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {DemoComponent} from "./demo.component";
import {TipDemoComponent} from "./tip-demo/tip-demo.component";
import {ModalDemoComponent} from "./modal-demo/modal-demo.component";
import {ChartDemoComponent} from "./chart-demo/chart-demo.component";
/**
 * demo模块的路由
 * 参数_t为该路由的标题，此方案主要是为了保证该路由的标题与原始数据保持绝对的一致，而不用在子组件中重新定一个标题名称
 * 此方案的优劣性有待考证。
 */
const demoRoutes: Routes = [
  {
    path: '',
    component: DemoComponent,
    children: [
      {path: 'tipDemo/:_t', component: TipDemoComponent},
      {path: 'modalDemo/:_t', component: ModalDemoComponent},
      {path: 'ngxChartDemo/:_t', component: ChartDemoComponent},
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
