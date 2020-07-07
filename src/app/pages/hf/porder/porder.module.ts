import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PorderPageRoutingModule } from './porder-routing.module';

import { PorderPage } from './porder.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PorderPageRoutingModule
  ],
  declarations: [PorderPage]
})
export class PorderPageModule {}
