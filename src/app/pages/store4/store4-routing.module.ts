import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Store4Page } from './store4.page';

const routes: Routes = [
  {
    path: '',
    component: Store4Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Store4PageRoutingModule {}
