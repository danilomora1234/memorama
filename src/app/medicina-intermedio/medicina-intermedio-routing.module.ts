import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicinaIntermedioPage } from './medicina-intermedio.page';

const routes: Routes = [
  {
    path: '',
    component: MedicinaIntermedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicinaIntermedioPageRoutingModule {}
