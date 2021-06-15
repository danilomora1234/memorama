import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComidaFacilPageRoutingModule } from './comida-facil-routing.module';

import { ComidaFacilPage } from './comida-facil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidaFacilPageRoutingModule
  ],
  declarations: [ComidaFacilPage]
})
export class ComidaFacilPageModule {}
