import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanderasDificilPageRoutingModule } from './banderas-dificil-routing.module';

import { BanderasDificilPage } from './banderas-dificil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanderasDificilPageRoutingModule
  ],
  declarations: [BanderasDificilPage]
})
export class BanderasDificilPageModule {}
