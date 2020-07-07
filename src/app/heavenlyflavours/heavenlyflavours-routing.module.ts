import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeavenlyflavoursPage } from './heavenlyflavours.page';

const routes: Routes = [
  {
    path: '',
    component: HeavenlyflavoursPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeavenlyflavoursPageRoutingModule {}
