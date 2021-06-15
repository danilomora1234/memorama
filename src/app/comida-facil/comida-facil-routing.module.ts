import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ComidaFacilPage } from './comida-facil.page';

const routes: Routes = [
  {
    path: '',
    component: ComidaFacilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComidaFacilPageRoutingModule {}
