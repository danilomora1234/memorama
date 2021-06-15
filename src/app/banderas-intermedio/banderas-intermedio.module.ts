import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BanderasIntermedioPageRoutingModule } from './banderas-intermedio-routing.module';

import { BanderasIntermedioPage } from './banderas-intermedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BanderasIntermedioPageRoutingModule
  ],
  declarations: [BanderasIntermedioPage]
})
export class BanderasIntermedioPageModule {}
