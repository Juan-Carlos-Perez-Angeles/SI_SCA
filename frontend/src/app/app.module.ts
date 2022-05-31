import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AgregarComponent } from './componentes/agregar/agregar/agregar.component';
import { InicioComponent } from './componentes/inicio/inicio/inicio.component';
import { ModificarComponent } from './componentes/modificar/modificar/modificar.component';
import { HttpClientModule } from '@angular/common/http';
import { AutomovilService } from './services/automovil.service';

@NgModule({
  declarations: [
    AppComponent,
    AgregarComponent,
    InicioComponent,
    ModificarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AutomovilService],
  bootstrap: [AppComponent]
})
export class AppModule { }
