// Este archivo se utiliza para declarar un modulo de todos los componentes
// de la carpeta pages.
// luego se debe agregar dentro de los import del archivo app.module.ts

import { NgModule } from "@angular/core";

import { PAGES_ROUTES } from './pages.routes';

import { SharedModule } from '../shared/shared.modules';

import { FormsModule } from '@angular/forms';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from '../pages/dashboard/dashboard.component';
import { ProgressComponent } from '../pages/progress/progress.component';
import { Graficas1Component } from '../pages/graficas1/graficas1.component';


@NgModule(
  {
    declarations: [
      PagesComponent,
      DashboardComponent,
      ProgressComponent,
      Graficas1Component
    ],
    exports: [
      DashboardComponent,
      ProgressComponent,
      Graficas1Component
    ],
    imports: [
      SharedModule,
      PAGES_ROUTES,
      FormsModule
    ]
  }
)

export class PagesModule {}
