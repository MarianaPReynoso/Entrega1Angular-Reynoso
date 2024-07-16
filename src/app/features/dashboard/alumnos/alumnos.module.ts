import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import {MatTableModule} from '@angular/material/table';
import { AlumnosComponent } from './alumnos.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogoComponent } from './dialogo/dialogo.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [AlumnosComponent, DialogoComponent],
  imports: [
    CommonModule,
    AlumnosRoutingModule, 
    MatTableModule, 
    MatIconModule, 
    MatDialogModule, 
    MatFormFieldModule, 
    MatButtonModule, 
    MatInputModule, 
    MatDatepickerModule, 
    ReactiveFormsModule, 
    MatSelectModule, 
    FormsModule
  ],
  exports: [AlumnosComponent]
})
export class AlumnosModule { }
