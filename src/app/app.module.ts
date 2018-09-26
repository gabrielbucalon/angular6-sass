import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { HeaderComponent } from './shared/header/header.component';
import { GeneralFormsComponent } from './general-forms/general-forms.component';
import { LookWorkersComponent } from './look-workers/look-workers.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    SidebarComponent,
    HeaderComponent,
    GeneralFormsComponent,
    LookWorkersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {
        path: 'generalForms',
        component: GeneralFormsComponent
      },
      {
        path: 'lookWorkers',
        component: LookWorkersComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
