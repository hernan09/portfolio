import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BotonTopComponent } from './boton-top/boton-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgsRevealModule } from 'ng-scrollreveal';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProductIdComponent } from './product-id/product-id.component';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BotonTopComponent,
    ProductIdComponent, 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgsRevealModule,
    
  ],
  providers: [ ],
  bootstrap: [AppComponent]
})

export class AppModule { }
