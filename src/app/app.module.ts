import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardModule } from './features/dashboard/dashboard.module';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideNativeDateAdapter } from '@angular/material/core';
// import { SizeDirective } from './features/shared/directives/size.directive';
// import { NombreCompletoPipe } from './features/shared/pipes/nombre-completo.pipe';

@NgModule({
  declarations: [
    AppComponent,
    // SizeDirective,
    // NombreCompletoPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    DashboardModule,

  ],
  providers: [
    provideAnimationsAsync(),
    provideNativeDateAdapter()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
