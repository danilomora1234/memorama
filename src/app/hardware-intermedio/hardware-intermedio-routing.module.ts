import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HardwareIntermedioPage } from './hardware-intermedio.page';

const routes: Routes = [
  {
    path: '',
    component: HardwareIntermedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HardwareIntermedioPageRoutingModule {}
