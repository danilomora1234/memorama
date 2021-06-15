import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicinaIntermedioPageRoutingModule } from './medicina-intermedio-routing.module';

import { MedicinaIntermedioPage } from './medicina-intermedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicinaIntermedioPageRoutingModule
  ],
  declarations: [MedicinaIntermedioPage]
})
export class MedicinaIntermedioPageModule {}
