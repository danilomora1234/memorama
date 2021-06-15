import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicinaFacilPageRoutingModule } from './medicina-facil-routing.module';

import { MedicinaFacilPage } from './medicina-facil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicinaFacilPageRoutingModule
  ],
  declarations: [MedicinaFacilPage]
})
export class MedicinaFacilPageModule {}
