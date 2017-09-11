import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {LoadingComponent} from './loading/loading.component';
import {AppRoutingModule} from "./app-routing.module";
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {SelectivePreloadingStrategy} from "./selective-preloading-strategy";
import {TipComponent} from './tip/tip.component';
import {AppService} from "./app.service";


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    PageNotFoundComponent,
    TipComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [SelectivePreloadingStrategy, AppService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
