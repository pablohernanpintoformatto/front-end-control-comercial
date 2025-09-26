import { Component, inject } from '@angular/core';
import {
  FormControl,
  Validators,
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  AbstractControl,
  ValidationErrors
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { FormularioCgvConstructora } from '../formulario-cgv-constructora/formulario-cgv-constructora';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { Observable, map, startWith } from 'rxjs';
import { Boton } from "../../components/boton/boton";

@Component({
  selector: 'app-formulario-cliente',
  standalone: true,
  templateUrl: './formulario-cliente.html',
  styleUrl: './formulario-cliente.css',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    Boton
  ]
})
export class FormularioCliente {
  private dialogRef = inject(MatDialogRef<FormularioCgvConstructora>);
  private http = inject(HttpClient);

  apiUrl = environment.apiUrl;
  // Opciones para el campo "estatus"
  estatusControl = new FormControl<string | null>('', Validators.required);
  clienteForm = new FormGroup({
    nombre_cliente: new FormControl('', [Validators.required]),
    rut_cliente: new FormControl('', [Validators.required, rutValidator]),
  });

  constructor() {

  }


  agregarCliente() {
    if (this.clienteForm.valid) {
      console.log(this.clienteForm.value)
      const clienteData = this.clienteForm.value;
      console.log('Cliente ingresado:', clienteData);

  /* 
      this.http.post(this.apiUrl + '/cliente/add', clienteData).subscribe(
        (data) => {
          alert('SE HA REGISTRADO CLIENTE');
          console.log(data);
          window.location.reload();
        },
        (error) => {
          console.log(clienteData);
          alert('ERROR AL REGISTRAR CLIENTE');
          console.error(error);
        }
      );
    } else {
      this.clienteForm.markAllAsTouched();
      alert('INGRESO NO VÁLIDO');*/
    }
  } 


  closeDialog() {
    this.dialogRef.close();
  }
}
function rutValidator(control: AbstractControl): ValidationErrors | null {
  const rut = control.value;

  if (!rut) return null; 

  const rutRegex = /^\d{7,8}-[0-9Kk]$/;
  if (!rutRegex.test(rut)) {
    return { rutInvalido: true };
  }

  // Separar cuerpo y DV
  const [cuerpo, dvIngresado] = rut.split('-');
  const dv = dvIngresado.toUpperCase();

  let suma = 0;
  let multiplicador = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo.charAt(i), 10) * multiplicador;
    multiplicador = multiplicador === 7 ? 2 : multiplicador + 1;
  }

  const resto = 11 - (suma % 11);
  const dvEsperado = resto === 11 ? '0' : resto === 10 ? 'K' : String(resto);

  return dv === dvEsperado ? null : { rutInvalido: true };
}
