import { NgModule } from "@angular/core";

import { NopagesfoundComponent } from '../shared/nopagesfound/nopagesfound.component';
import { HeaderComponent } from '../shared/header/header.component';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from '../shared/breadcrumbs/breadcrumbs.component';

@NgModule(
  {
    declarations: [
      NopagesfoundComponent,
      HeaderComponent,
      SidebarComponent,
      BreadcrumbsComponent,
    ],
    exports: [
      NopagesfoundComponent,
      HeaderComponent,
      SidebarComponent,
      BreadcrumbsComponent,
    ]
  }
)

export class SharedModule {}
