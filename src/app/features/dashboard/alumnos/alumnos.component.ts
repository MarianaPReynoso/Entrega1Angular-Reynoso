import { Component } from '@angular/core';
import { Estudiantes } from './models';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from './dialogo/dialogo.component';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrl: './alumnos.component.scss'
})

export class AlumnosComponent {
  nombreCurso = '';

  displayedColumns: string[] = ['id', 'name', 'clase', 'startDate', 'endDate', 'actions'];
  dataSource: Estudiantes[] = [
    {
      id: 1,
      name: 'Eddie Kaspbrak',
      clase: '',
      startDate: new Date(),
      endDate: new Date(),
    },

    {
      id: 2,
      name: 'Richie Tozier',
      clase: '',
      startDate: new Date(),
      endDate: new Date(),
    },
  ];

  constructor(private matDialog: MatDialog) {}

  openDialog(): void {
    this.matDialog.open(DialogoComponent).afterClosed().subscribe({
      next: (value) => {        
        this.nombreCurso = value.name;
        // this.dataSource.push(value);

        // this.dataSource = [...this.dataSource, value]; //Esto lo que hace es agregar a la tabla los nuevos cursos que creemos con el díalogo
      },
    });
  }

  modificarAlumno(editarCurso: Estudiantes) {
    this.matDialog.open(DialogoComponent, {data: editarCurso}).afterClosed().subscribe({
      next: (value) => {
        if(!!value) {
          this.dataSource = this.dataSource.map((el) => el.id === editarCurso.id ? {...value, id: editarCurso.id} : el);
        }
      }
    });
  }

  // deleteCourseById(id: string) {
  //   if(confirm('¿Está seguro de querer eliminar este alumno?')){
  //     this.dataSource = this.dataSource.filter((el) => el.id != id);
  //   } 
  // }
}