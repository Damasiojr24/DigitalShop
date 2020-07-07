import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HFPage } from './hf.page';

const routes: Routes = [
  {
    path: '',
    component: HFPage
  },
  {
    path: 'plist',
    loadChildren: () => import('./plist/plist.module').then( m => m.PlistPageModule)
  },
  {
    path: 'porder',
    loadChildren: () => import('./porder/porder.module').then( m => m.PorderPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HFPageRoutingModule {}
