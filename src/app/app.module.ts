import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import * as $ from 'jquery';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
