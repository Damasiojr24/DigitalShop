import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlistPageRoutingModule } from './plist-routing.module';

import { PlistPage } from './plist.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlistPageRoutingModule
  ],
  declarations: [PlistPage]
})
export class PlistPageModule {}
