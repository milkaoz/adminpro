import { RouterModule, Routes } from '@angular/router';

import { PagesComponent } from '../pages/pages.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';

const pagesRoutes: Routes = [
  {
    path: '',
    component: PagesComponent,
    // rutas hijas de pagesComponent
    // pages component tiene un component <router-outlet></router-outlet>
    // que permite cargar componentes (dashboard, progress, graficas1)
    // dentro de pagesComponent
    children: [
      { path: 'dashboard', component: DashboardComponent},
      { path: 'progress', component: ProgressComponent},
      { path: 'graficas1', component: Graficas1Component},
      // Cuando no existe ruta redirecciona al dashboard
      { path: '', redirectTo: '/dashboard', pathMatch: 'full'}
    ]
  }
];

export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes);
