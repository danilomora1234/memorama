import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicinaFacilPage } from './medicina-facil.page';

const routes: Routes = [
  {
    path: '',
    component: MedicinaFacilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicinaFacilPageRoutingModule {}
