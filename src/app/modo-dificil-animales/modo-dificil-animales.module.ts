import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModoDificilAnimalesPageRoutingModule } from './modo-dificil-animales-routing.module';

import { ModoDificilAnimalesPage } from './modo-dificil-animales.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModoDificilAnimalesPageRoutingModule
  ],
  declarations: [ModoDificilAnimalesPage]
})
export class ModoDificilAnimalesPageModule {}
