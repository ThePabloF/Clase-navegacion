import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponenteAComponent } from './Componentes/componente-a/componente-a.component';
import { ComponenteBComponent } from './Componentes/componente-b/componente-b.component';
import { ComponenteCComponent } from './Componentes/componente-c/componente-c.component';
import { ComponenteDComponent } from './Componentes/componente-d/componente-d.component';

const routes: Routes = [
  {
    path: '',
    component: ComponenteAComponent

  },
{path:'segunda',
component:ComponenteBComponent},
{path: 'tercera', component:ComponenteCComponent},
{path: 'cuarta', component:ComponenteDComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
