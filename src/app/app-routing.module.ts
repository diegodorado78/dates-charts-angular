import { NgModule } from '@angular/core';
import {PreloadAllModules, Routes, RouterModule } from '@angular/router';
import {LayoutComponent} from './pages/layout/layout.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'winder',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./winder/winder.module').then(m => m.WinderModule)
      },
      {
        path: 'extrusor',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./extrusor/extrusor.module').then(m => m.ExtrusorModule)
      },
      {
        path: 'boquilla',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./boquilla/boquilla.module').then(m => m.BoquillaModule)
      },
    ]
  },
  {
    path: '**',
    loadChildren: () => import('./pages/page-not-found/page-not-found.module').then(m => m.PageNotFoundModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{
  //  preloadingStrategy: PreloadAllModules // metodo para precargar componentes no usados
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
