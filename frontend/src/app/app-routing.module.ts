import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgregarComponent } from './componentes/agregar/agregar/agregar.component';
import { InicioComponent } from './componentes/inicio/inicio/inicio.component';
import { ModificarComponent } from './componentes/modificar/modificar/modificar.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'agregar', component: AgregarComponent },
  { path: 'modificar', component: ModificarComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
