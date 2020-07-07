import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then( m => m.UsersPageModule)
  },
  {
    path: 'heavenlyflavours',
    loadChildren: () => import('./heavenlyflavours/heavenlyflavours.module').then( m => m.HeavenlyflavoursPageModule)
  },
  {
    path: 'hf',
    loadChildren: () => import('./pages/hf/hf.module').then( m => m.HFPageModule)
  },
  {
    path: 'store2',
    loadChildren: () => import('./pages/store2/store2.module').then( m => m.Store2PageModule)
  },
  {
    path: 'store3',
    loadChildren: () => import('./pages/store3/store3.module').then( m => m.Store3PageModule)
  },
  {
    path: 'store4',
    loadChildren: () => import('./pages/store4/store4.module').then( m => m.Store4PageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
