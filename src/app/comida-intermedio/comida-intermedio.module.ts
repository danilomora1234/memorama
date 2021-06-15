import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComidaIntermedioPageRoutingModule } from './comida-intermedio-routing.module';

import { ComidaIntermedioPage } from './comida-intermedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidaIntermedioPageRoutingModule
  ],
  declarations: [ComidaIntermedioPage]
})
export class ComidaIntermedioPageModule {}
