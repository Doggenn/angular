import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ListaProductosComponent } from './components/lista-productos/lista-productos.component';


@NgModule({
  declarations: [
    AppComponent,
    FormularioComponent,
    ListaProductosComponent,

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
