import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanderasDificilPage } from './banderas-dificil.page';

const routes: Routes = [
  {
    path: '',
    component: BanderasDificilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanderasDificilPageRoutingModule {}
