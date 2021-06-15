import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModoIntermedioAnimalesPageRoutingModule } from './modo-intermedio-animales-routing.module';

import { ModoIntermedioAnimalesPage } from './modo-intermedio-animales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModoIntermedioAnimalesPageRoutingModule
  ],
  declarations: [ModoIntermedioAnimalesPage]
})
export class ModoIntermedioAnimalesPageModule {}
