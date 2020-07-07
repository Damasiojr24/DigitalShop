import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HFPageRoutingModule } from './hf-routing.module';

import { HFPage } from './hf.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HFPageRoutingModule
  ],
  declarations: [HFPage]
})
export class HFPageModule {}
