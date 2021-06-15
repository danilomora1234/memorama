import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HardwareDificilPage } from './hardware-dificil.page';

const routes: Routes = [
  {
    path: '',
    component: HardwareDificilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HardwareDificilPageRoutingModule {}
