import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './Fruta/fruta.component';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent, FrutaComponent]
})
export class AppModule { }
