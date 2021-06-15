import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BanderasIntermedioPage } from './banderas-intermedio.page';

const routes: Routes = [
  {
    path: '',
    component: BanderasIntermedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BanderasIntermedioPageRoutingModule {}
