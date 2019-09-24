import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '../app/home/home.component';
import { BotonTopComponent } from './boton-top/boton-top.component';
import { CartasComponent } from './cartas/cartas.component';


const routes: Routes = [{ path: '', component: HomeComponent },
{path: 'info', component: BotonTopComponent},
{path: 'card/:id', component: CartasComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
