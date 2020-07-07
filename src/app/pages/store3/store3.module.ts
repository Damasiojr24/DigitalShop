import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Store3PageRoutingModule } from './store3-routing.module';

import { Store3Page } from './store3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Store3PageRoutingModule
  ],
  declarations: [Store3Page]
})
export class Store3PageModule {}
