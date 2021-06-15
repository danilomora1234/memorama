import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModoDificilAnimalesPage } from './modo-dificil-animales.page';

const routes: Routes = [
  {
    path: '',
    component: ModoDificilAnimalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModoDificilAnimalesPageRoutingModule {}
