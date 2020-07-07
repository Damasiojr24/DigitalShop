import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Store3Page } from './store3.page';

const routes: Routes = [
  {
    path: '',
    component: Store3Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Store3PageRoutingModule {}
