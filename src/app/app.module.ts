import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas creadas en app.routes.ts
import { APP_ROUTES } from './app.routes';

// Modulos
import { PagesModule } from './pages/pages.modules';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,

  ],
  // Aqui se agregan los modulos, por ejemplo el modulo que se creo en app.routes con todas las rutas
  imports: [
    BrowserModule,
    APP_ROUTES,
    PagesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
