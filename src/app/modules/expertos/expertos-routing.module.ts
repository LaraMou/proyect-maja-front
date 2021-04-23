import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertosPageComponent } from './expertos-page/expertos-page.component';

const routes: Routes = [
  {
    path: '',
    component:ExpertosPageComponent
  }
   //TODO realizar detail
  // {
  //   path: ':id'
  //   component: ExpertosDetailPageComponent
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExpertosRoutingModule { }
