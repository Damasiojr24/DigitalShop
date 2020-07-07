import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Store2Page } from './store2.page';

const routes: Routes = [
  {
    path: '',
    component: Store2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Store2PageRoutingModule {}
