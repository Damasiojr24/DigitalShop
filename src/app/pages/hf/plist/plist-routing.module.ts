import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlistPage } from './plist.page';

const routes: Routes = [
  {
    path: '',
    component: PlistPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlistPageRoutingModule {}
