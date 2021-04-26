import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertosPageComponent } from './expertos-page/expertos-page.component';
import { FormComponent } from './form/form.component';

const routes: Routes = [
  {
    path: '',
    component:ExpertosPageComponent
  },
  {
    path: 'expertos/form/form',
    component:FormComponent
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
