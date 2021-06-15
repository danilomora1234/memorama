import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuDificilPage } from './menu-dificil.page';

const routes: Routes = [
  {
    path: '',
    component: MenuDificilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuDificilPageRoutingModule {}
