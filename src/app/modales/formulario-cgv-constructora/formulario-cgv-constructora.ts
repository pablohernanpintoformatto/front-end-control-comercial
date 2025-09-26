import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-formulario-cgv-constructora',
  imports: [],
  templateUrl: './formulario-cgv-constructora.html',
  styleUrl: './formulario-cgv-constructora.css'
})
export class FormularioCgvConstructora {
  constructor(
    private dialogRef: MatDialogRef<FormularioCgvConstructora>
  ) { }
  closeDialog() {
    this.dialogRef.close(); // Esto cierra el modal correctamente
  }
}
