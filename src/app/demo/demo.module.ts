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
import {TipDemoComponent} from "./tip-demo.component";
import {ModalDemoComponent} from "./modal-demo.component";
import {CustomModalComponent} from "./custom-modal.component";
import {CommonModalComponent} from "../shared/common/common-modal.component";
import {DemoCustomModalComponent} from "./demo-custom-modal.component";
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
    DemoCustomModalComponent
  ],
  entryComponents: [
    CustomModalComponent,
    CommonModalComponent
  ],
  exports: [],
  providers: []
})
export class DemoModule {}
