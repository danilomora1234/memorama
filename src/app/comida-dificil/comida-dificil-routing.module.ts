import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidaDificilPage } from './comida-dificil.page';

const routes: Routes = [
  {
    path: '',
    component: ComidaDificilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidaDificilPageRoutingModule {}
