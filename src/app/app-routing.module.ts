import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { BotonTopComponent } from './boton-top/boton-top.component';



const routes: Routes = [{ path: '', component: HomeComponent }, {path: 'tecnologi/:id', component: BotonTopComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
