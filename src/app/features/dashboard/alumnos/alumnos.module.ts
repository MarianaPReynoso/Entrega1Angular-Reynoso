import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlumnosRoutingModule } from './alumnos-routing.module';
import {MatTableModule} from '@angular/material/table';
import { AlumnosComponent } from './alumnos.component';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { MiniDialogoComponent } from './components/mini-dialogo/mini-dialogo.component';
// import { NombreCompletoPipe } from '../../shared/pipes/nombre-completo.pipe';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [AlumnosComponent, DialogoComponent, MiniDialogoComponent],
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
    FormsModule, 
    SharedModule,
  ],
  exports: [AlumnosComponent]
})
export class AlumnosModule { }
