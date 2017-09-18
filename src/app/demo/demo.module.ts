import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {NgxChartsModule} from "@swimlane/ngx-charts";
import {MultiselectDropdownModule} from "angular-2-dropdown-multiselect";
import {SharedModule} from "../shared/shared.module";
import {ImageCropperModule} from "ng2-img-cropper";
import {SelectModule} from "angular2-select";
import {Select2Module} from "ng2-select2";
import {FileUploadModule} from "ng2-file-upload";
import {DemoRoutingModule} from "./demo-routing.module";
import {DemoComponent} from "./demo.component";
import {TipDemoComponent} from "./tip-demo/tip-demo.component";
import {ModalDemoComponent} from "./modal-demo/modal-demo.component";
import {CustomModalComponent} from "./modal-demo/custom-modal.component";
import {CommonModalComponent} from "../shared/common/common-modal.component";
import {DemoCustomModalComponent} from "./modal-demo/demo-custom-modal.component";
import {ChartDemoComponent} from "./chart-demo/chart-demo.component";
import {SelectDemoComponent} from "./select-demo/select-demo.component";
import {GridDemoComponent} from "./grid-demo/grid-demo.component";

/**
 * demo模块
 * 创建一个demo的步骤
 * 1.新建xxx.component.html
 * 2.新建xxx.component.ts 编写组件代码
 * 3.在demo.module.ts的declarations中加上XxxComponent
 * 4.在demo-routing.module.ts中加上该路由
 */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    NgbModule,
    NgxChartsModule,
    MultiselectDropdownModule,
    SharedModule,
    ImageCropperModule,
    SelectModule,
    Select2Module,
    FileUploadModule,
    DemoRoutingModule
  ],
  declarations: [
    DemoComponent,
    TipDemoComponent,
    ModalDemoComponent,
    CustomModalComponent,
    CommonModalComponent,
    DemoCustomModalComponent,
    ChartDemoComponent,
    SelectDemoComponent,
    GridDemoComponent
  ],
  entryComponents: [
    CustomModalComponent,
    CommonModalComponent
  ],
  exports: [],
  providers: []
})
export class DemoModule {}
