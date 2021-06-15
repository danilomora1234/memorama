import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HardwareFacilPageRoutingModule } from './hardware-facil-routing.module';

import { HardwareFacilPage } from './hardware-facil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HardwareFacilPageRoutingModule
  ],
  declarations: [HardwareFacilPage]
})
export class HardwareFacilPageModule {}
