import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
///////////////////////////////////////////////
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './shared/material/material.module';
//import { InvoiceBuilderComponent } from './invoice-builder/invoice-builder.component';
//import { InvoiceBuilderModule } from './invoice-builder/invoice-builder.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    //InvoiceBuilderModule 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
