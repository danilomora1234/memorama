import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HardwareIntermedioPageRoutingModule } from './hardware-intermedio-routing.module';

import { HardwareIntermedioPage } from './hardware-intermedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HardwareIntermedioPageRoutingModule
  ],
  declarations: [HardwareIntermedioPage]
})
export class HardwareIntermedioPageModule {}
