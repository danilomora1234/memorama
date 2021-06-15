import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuIntermedioPageRoutingModule } from './menu-intermedio-routing.module';

import { MenuIntermedioPage } from './menu-intermedio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuIntermedioPageRoutingModule
  ],
  declarations: [MenuIntermedioPage]
})
export class MenuIntermedioPageModule {}
