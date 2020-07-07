import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Store2PageRoutingModule } from './store2-routing.module';

import { Store2Page } from './store2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Store2PageRoutingModule
  ],
  declarations: [Store2Page]
})
export class Store2PageModule {}
