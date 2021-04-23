import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EtiquetasPageComponent } from './etiquetas-page/etiquetas-page.component';

const routes: Routes = [
  {
    path: '',
    component:EtiquetasPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EtiquetasRoutingModule { }
