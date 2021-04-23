import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpertosRoutingModule } from './expertos-routing.module';
import { ExpertosPageComponent } from './expertos-page/expertos-page.component';


@NgModule({
  declarations: [
    ExpertosPageComponent
  ],
  imports: [
    CommonModule,
    ExpertosRoutingModule
  ]
})
export class ExpertosModule { }
