import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { BotonTopComponent } from './boton-top/boton-top.component';
import { ProductIdComponent } from './product-id/product-id.component';

const routes: Routes = [{ path:'',component:HomeComponent },{path:'info',component:BotonTopComponent},{path:'info/:id',component:ProductIdComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
