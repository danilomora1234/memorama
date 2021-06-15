import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HardwareDificilPageRoutingModule } from './hardware-dificil-routing.module';

import { HardwareDificilPage } from './hardware-dificil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HardwareDificilPageRoutingModule
  ],
  declarations: [HardwareDificilPage]
})
export class HardwareDificilPageModule {}
