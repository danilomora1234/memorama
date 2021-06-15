import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ComidaDificilPageRoutingModule } from './comida-dificil-routing.module';

import { ComidaDificilPage } from './comida-dificil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ComidaDificilPageRoutingModule
  ],
  declarations: [ComidaDificilPage]
})
export class ComidaDificilPageModule {}
