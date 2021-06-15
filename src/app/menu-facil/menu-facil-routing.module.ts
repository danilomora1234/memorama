import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuFacilPage } from './menu-facil.page';

const routes: Routes = [
  {
    path: '',
    component: MenuFacilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MenuFacilPageRoutingModule {}
