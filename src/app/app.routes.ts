import { RouterModule, Routes } from '@angular/router';



import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';
import { NopagesfoundComponent } from './shared/nopagesfound/nopagesfound.component';

const appRoutes: Routes = [

  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},

  // Cualquier ruta que no este defina, redireciona a paganotfound
  { path: '**', component: NopagesfoundComponent}

];

// exportamos el modulo de rutas --> forRoot se utiliza para las rutas principales
// El literal {useHash: true} añadirá un # a la ruta, para que el navegador no recargue la pagina.
export const  APP_ROUTES = RouterModule.forRoot(appRoutes, {useHash: true});

// Para que las rutas funcionen se deben importar en el archivo app.module.ts

