import { Routes } from '@angular/router';

export const appRoutes: Routes = [
  
  {
    path: '', 
    loadChildren: () => import('./components/home/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule)
  },
];
