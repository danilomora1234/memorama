import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModoFacilAnimalesPageRoutingModule } from './modo-facil-animales-routing.module';

import { ModoFacilAnimalesPage } from './modo-facil-animales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModoFacilAnimalesPageRoutingModule
  ],
  declarations: [ModoFacilAnimalesPage]
})
export class ModoFacilAnimalesPageModule {}
