import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidaIntermedioPage } from './comida-intermedio.page';

const routes: Routes = [
  {
    path: '',
    component: ComidaIntermedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidaIntermedioPageRoutingModule {}
