import { Component, Inject } from '@angular/core';
import { Estudiantes } from '../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Cursos } from '../models';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.scss'
})

export class DialogoComponent {
  courseForm: FormGroup;
  seleccioneCurso: string[] = [];

  courses: Cursos[] = [ //No logro hacer que la selección aparezca en la tabla una vez cerrado el diálogo
    {viewValue: 'Angular'},
    {viewValue: 'ReactJS'},
    {viewValue: 'Programación Web'},
    {viewValue: 'Photoshop'},
    {viewValue: 'Marketing Digital'},
  ];

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<DialogoComponent>,
    public dialogRef: MatDialogRef<DialogoComponent>,
    @Inject (MAT_DIALOG_DATA) public editarCurso?: Estudiantes
  ) {
    this.courseForm = this.fb.group({
      name: [null, Validators.required],
      curso: [],
      startDate: [],
      endDate: [],
    });

    if(this.editarCurso) {
      this.courseForm.patchValue(this.editarCurso);
    }
  }

  onSubmit(): void {
    this.dialogRef.close(this.seleccioneCurso)
    if(this.courseForm.valid) {
      this.matDialogRef.close(this.courseForm.value);
    } else {

    }
  }  
}

// export class SelectDialogo{
//   selectedValue: string;

//   cursos: Cursos[] = [
//     {value: 'steak-0', viewValue: 'Steak'},
//     {value: 'pizza-1', viewValue: 'Pizza'},
//     {value: 'tacos-2', viewValue: 'Tacos'},
//   ];
// }
