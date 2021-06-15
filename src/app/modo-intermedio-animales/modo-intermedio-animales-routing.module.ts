import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModoIntermedioAnimalesPage } from './modo-intermedio-animales.page';

const routes: Routes = [
  {
    path: '',
    component: ModoIntermedioAnimalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModoIntermedioAnimalesPageRoutingModule {}
