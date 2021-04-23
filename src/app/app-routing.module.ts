import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo:'/expertos'
  },
  {
    path: 'expertos',
    loadChildren: () => import('./modules/expertos/expertos.module').then(m => m.ExpertosModule)
  },
  {
    path: 'etiquetas',
    loadChildren: () => import('./modules/etiquetas/etiquetas.module').then(m => m.EtiquetasModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
