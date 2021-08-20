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
        loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)        },
      
      {
        path: 'kpis',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./kpis/kpis.module').then(m => m.KpisModule)
      },
      {
        path: 'reports',
        // canActivate: [AdminGuard],
        loadChildren: () => import('./reports/reports.module').then(m => m.ReportsModule)
      },

      //I place the other modules to be accessed from anywhere using the hamburger menu
      // {
      //   path: 'winder',
      //   // canActivate: [AdminGuard],
      //   loadChildren: () => import('./reports/winder/winder.module').then(m => m.WinderModule)
      // },
      // {
      //   path: 'extrusor',
      //   // canActivate: [AdminGuard],
      //   loadChildren: () => import('./reports/extrusor/extrusor.module').then(m => m.ExtrusorModule)
      // },
      // {
      //   path: 'boquilla',
      //   // canActivate: [AdminGuard],
      //   loadChildren: () => import('./reports/boquilla/boquilla.module').then(m => m.BoquillaModule)
      // },

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
