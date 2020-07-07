import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PorderPage } from './porder.page';

const routes: Routes = [
  {
    path: '',
    component: PorderPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PorderPageRoutingModule {}
