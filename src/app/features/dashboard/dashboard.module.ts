import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatListModule} from '@angular/material/list';
import { AlumnosModule } from './alumnos/alumnos.module';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [DashboardComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule, 
    MatSidenavModule, 
    MatButtonModule, 
    MatToolbarModule, 
    MatIconModule, 
    MatListModule, 
    AlumnosModule, 
    MatTableModule
  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
