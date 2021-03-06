import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID } from '@angular/core';

import { AppComponent } from './app.component';
import { CapitalizadoPipe } from "app/pipes/capitalizado.pipe";
import { DomseguroPipe } from './pipes/domseguro.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [{
      provide: LOCALE_ID, useValue: "es"
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
