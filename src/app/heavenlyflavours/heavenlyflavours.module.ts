import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeavenlyflavoursPageRoutingModule } from './heavenlyflavours-routing.module';

import { HeavenlyflavoursPage } from './heavenlyflavours.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HeavenlyflavoursPageRoutingModule
  ],
  declarations: [HeavenlyflavoursPage]
})
export class HeavenlyflavoursPageModule {}
