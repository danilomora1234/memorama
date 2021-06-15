import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MedicinaDificilPageRoutingModule } from './medicina-dificil-routing.module';

import { MedicinaDificilPage } from './medicina-dificil.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MedicinaDificilPageRoutingModule
  ],
  declarations: [MedicinaDificilPage]
})
export class MedicinaDificilPageModule {}
