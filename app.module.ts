import './polyfills';

import {HttpClientModule} from '@angular/common/http';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import {BrowserModule} from '@angular/platform-browser';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DemoMaterialModule} from './material-module';

import {AppComponent} from './app/app.component';
import {HeaderComponent} from './app/header/header.component';
import {ContentComponent} from './app/content/content.component';
import {FooterComponent} from './app/footer/footer.component';
import {LEDDisplayComponent} from './app/content/led-display/led-display.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, HeaderComponent, ContentComponent,LEDDisplayComponent, FooterComponent],
  bootstrap: [AppComponent],
  providers: []
})
export class AppModule {}




/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */