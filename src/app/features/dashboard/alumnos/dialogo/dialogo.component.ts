import { Component, Inject } from '@angular/core';
import { Estudiantes } from '../models';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrl: './dialogo.component.scss'
})

export class DialogoComponent {
  courseForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private matDialogRef: MatDialogRef<DialogoComponent>,
    @Inject (MAT_DIALOG_DATA) public editarCurso?: Estudiantes
  ) {
    this.courseForm = this.fb.group({
      name: [null, Validators.required],
      startDate: [],
      endDate: [],
    });

    if(this.editarCurso) {
      this.courseForm.patchValue(this.editarCurso);
    }
  }

  onSubmit(): void {
    if(this.courseForm.valid) {
      this.matDialogRef.close(this.courseForm.value);
    } else {

    }
  }

}
