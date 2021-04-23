import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtiquetasRoutingModule } from './etiquetas-routing.module';
import { EtiquetasPageComponent } from './etiquetas-page/etiquetas-page.component';


@NgModule({
  declarations: [
    EtiquetasPageComponent
  ],
  imports: [
    CommonModule,
    EtiquetasRoutingModule
  ]
})
export class EtiquetasModule { }
