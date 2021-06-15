import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HardwareFacilPage } from './hardware-facil.page';

const routes: Routes = [
  {
    path: '',
    component: HardwareFacilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HardwareFacilPageRoutingModule {}
