import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import * as $ from 'jquery';
import { SectionHomeComponent } from './section2/section-home/section-home.component';
import { SectionContactComponent } from './section2/section-contact/section-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component,
    SectionHomeComponent,
    SectionContactComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
