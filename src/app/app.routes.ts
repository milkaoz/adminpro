import { RouterModule, Routes } from '@angular/router';

import { ProgressComponent } from './pages/progress/progress.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { Graficas1Component } from './pages/graficas1/graficas1.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component';
import { PagesComponent } from './pages/pages.component';

const appRoutes: Routes = [
  // Cuando no existe ruta redirecciona al dashboard
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
  },
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},



// Cualquier ruta que no este defina, redireciona a paganotfound
{ path: '**', component: NopagesfoundComponent}

];

// exportamos el modulo de rutas --> forRoot se utiliza para las rutas principales
// El literal {useHash: true} añadirá un # a la ruta, para que el navegador no recargue la pagina.
export const  APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});

// Para que las rutas funcionen se deben importar en el archivo app.module.ts

