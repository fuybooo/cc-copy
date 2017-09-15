import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {AppComponent} from './app.component';
import {LoadingComponent} from './loading/loading.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";
import {TipComponent} from './tip/tip.component';
import {AppService} from "./app.service";
import {TipService} from "./tip/tip.service";
import {TipBoxComponent} from "./tip/tip-box.component";
import {LoadingService} from "./loading/loading.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    PageNotFoundComponent,
    TipComponent,
    TipBoxComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    NgbModule.forRoot()
  ],
  providers: [SelectivePreloadingStrategy, AppService, TipService, LoadingService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
