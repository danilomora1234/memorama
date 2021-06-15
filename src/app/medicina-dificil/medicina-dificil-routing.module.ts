import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MedicinaDificilPage } from './medicina-dificil.page';

const routes: Routes = [
  {
    path: '',
    component: MedicinaDificilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MedicinaDificilPageRoutingModule {}
