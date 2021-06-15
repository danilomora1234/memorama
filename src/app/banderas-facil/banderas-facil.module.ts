import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanderasFacilPageRoutingModule } from './banderas-facil-routing.module';

import { BanderasFacilPage } from './banderas-facil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanderasFacilPageRoutingModule
  ],
  declarations: [BanderasFacilPage]
})
export class BanderasFacilPageModule {}
