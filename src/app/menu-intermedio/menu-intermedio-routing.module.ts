import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuIntermedioPage } from './menu-intermedio.page';

const routes: Routes = [
  {
    path: '',
    component: MenuIntermedioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuIntermedioPageRoutingModule {}
