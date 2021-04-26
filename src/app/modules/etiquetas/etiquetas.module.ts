import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EtiquetasRoutingModule } from './etiquetas-routing.module';
import { EtiquetasPageComponent } from './etiquetas-page/etiquetas-page.component';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';


@NgModule({
  declarations: [
    EtiquetasPageComponent,

  ],
  imports: [
    CommonModule,
    EtiquetasRoutingModule,
    MatCardModule,
    MatTableModule,
  ]
})
export class EtiquetasModule { }
