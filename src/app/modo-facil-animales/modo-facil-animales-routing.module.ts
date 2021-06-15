import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModoFacilAnimalesPage } from './modo-facil-animales.page';

const routes: Routes = [
  {
    path: '',
    component: ModoFacilAnimalesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModoFacilAnimalesPageRoutingModule {}
