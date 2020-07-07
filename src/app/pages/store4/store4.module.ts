import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Store4PageRoutingModule } from './store4-routing.module';

import { Store4Page } from './store4.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Store4PageRoutingModule
  ],
  declarations: [Store4Page]
})
export class Store4PageModule {}
