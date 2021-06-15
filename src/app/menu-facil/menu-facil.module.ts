import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuFacilPageRoutingModule } from './menu-facil-routing.module';

import { MenuFacilPage } from './menu-facil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuFacilPageRoutingModule
  ],
  declarations: [MenuFacilPage]
})
export class MenuFacilPageModule {}
