import { Component } from '@angular/core';
import { Estudiantes } from './models';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from './components/dialogo/dialogo.component';
import { generarClase, generarId } from '../../shared/utils';
import { MiniDialogoComponent } from './components/mini-dialogo/mini-dialogo.component';


@Component({
    selector: 'app-alumnos',
    templateUrl: './alumnos.component.html',
    styleUrl: './alumnos.component.scss',
})

export class AlumnosComponent {
    nombreCurso = '';

    displayedColumns: string[] = ['id', 'name', 'curso', 'clase', 'startDate', 'endDate', 'actions'];
    dataSource: Estudiantes[] = [
        {
        id: 1,
        name: 'Ana',
        lastName: 'Perez',
        curso: 'Angular',
        clase: 'A255',
        startDate: new Date(),
        endDate: new Date(),
        },

        {
        id: 2,
        name: 'Mateo ',
        lastName: 'Hernandez',
        curso: 'Programación Web',
        clase: 'B284',
        startDate: new Date(),
        endDate: new Date(),
        },

        {
        id: 3,
        name: 'Jorgelina',
        lastName: 'Abba',
        curso: 'ReactJs',
        clase: 'C475',
        startDate: new Date(),
        endDate: new Date(),
        },
    ];

    constructor(private matDialog: MatDialog) {}

    openDialog(): void {
        this.matDialog.open(DialogoComponent).afterClosed().subscribe({
            next: (value) => {        
                this.nombreCurso = value.name;

                value['id'] = generarId(2);
                value['clase'] = generarClase(4);
                this.dataSource = [...this.dataSource, value]; 
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

    deleteCourseById(id: number) {
        if(confirm()) {
            this.dataSource = this.dataSource.filter((el) => el.id != id);
        } 
    }

    probando(): void {
        this.matDialog.open(MiniDialogoComponent)
        }
    }

//Agregar:
//Hacer que el pipe personalizado funcione
// Dialog para consultar si se quiere eliminar un alumno
// Hacer que genere ID que vaya enumerando correctamente
