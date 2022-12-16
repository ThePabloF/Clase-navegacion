import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponenteAComponent } from './Componentes/componente-a/componente-a.component';
import { ComponenteBComponent } from './Componentes/componente-b/componente-b.component';
import { ComponenteCComponent } from './Componentes/componente-c/componente-c.component';
import { ComponenteDComponent } from './Componentes/componente-d/componente-d.component';


@NgModule({
  declarations: [
   AppComponent,
    ComponenteAComponent,
    ComponenteBComponent,
    ComponenteCComponent,
    ComponenteDComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
