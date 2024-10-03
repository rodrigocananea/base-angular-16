import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BaseComponent } from './layout/base/base.component';
import {SharedModule} from "./shared/shared.module";
import {TemaModule} from "./layout/tema/tema.module";

@NgModule({
  declarations: [
    AppComponent,
    BaseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    TemaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
