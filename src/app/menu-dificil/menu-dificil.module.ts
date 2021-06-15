import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuDificilPageRoutingModule } from './menu-dificil-routing.module';

import { MenuDificilPage } from './menu-dificil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuDificilPageRoutingModule
  ],
  declarations: [MenuDificilPage]
})
export class MenuDificilPageModule {}
