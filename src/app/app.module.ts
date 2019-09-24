import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BotonTopComponent } from './boton-top/boton-top.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgsRevealModule} from 'ngx-scrollreveal';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, en_US } from 'ng-zorro-antd';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { CartasComponent } from './cartas/cartas.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BotonTopComponent,
    CarrouselComponent,
    CartasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgsRevealModule,
    ReactiveFormsModule,
    NgZorroAntdModule
  ],
  providers: [{ provide: NZ_I18N, useValue: en_US}],
  bootstrap: [AppComponent]
})

export class AppModule { }
