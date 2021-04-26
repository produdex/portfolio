import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { Section1Component } from './section1/section1.component';
import { Section2Component } from './section2/section2.component';
import * as $ from 'jquery';
import { SectionHomeComponent } from './section2/section-home/section-home.component';
import { SectionContactComponent } from './section2/section-contact/section-contact.component';
import { SectionAboutComponent } from './section2/section-about/section-about.component';
import { SectionWorkComponent } from './section2/section-work/section-work.component';
import { RouterModule } from '@angular/router';
import { SectionDesignComponent } from './section2/section-design/section-design.component';

@NgModule({
  declarations: [
    AppComponent,
    Section1Component,
    Section2Component,
    SectionHomeComponent,
    SectionContactComponent,
    SectionAboutComponent,
    SectionWorkComponent,
    SectionDesignComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
