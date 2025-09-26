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
  selector: 'app-formulario-contacto-cliente',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatButtonModule,
    Boton],
  templateUrl: './formulario-contacto-cliente.html',
  styleUrl: './formulario-contacto-cliente.css'
})
export class FormularioContactoCliente {
  private dialogRef = inject(MatDialogRef<FormularioCgvConstructora>);
  private http = inject(HttpClient);


  /* nombre_cliente_contacto, cargo_cliente_contacto, correo_corporativo_cliente_contacto,
   correo_personal_cliente_contacto, telefono_personal_cliente_contacto, telefono_corporativo_cliente_contacto)
   */

  apiUrl = environment.apiUrl;
  // Opciones para el campo "estatus"
  clienteForm = new FormGroup({
    nombre_cliente_contacto: new FormControl('', [Validators.required]),
    cargo_cliente_contacto: new FormControl('', [Validators.required]),
    correo_corporativo_cliente_contacto: new FormControl('', [Validators.required]),
    correo_personal_cliente_contacto: new FormControl('', [Validators.required]),
    telefono_personal_cliente_contacto: new FormControl('', [Validators.required]),
    telefono_corporativo_cliente_contacto: new FormControl('', [Validators.required]),
  });

  constructor() {

  }


  agregarCliente() {
    if (this.clienteForm.valid) {
      console.log(this.clienteForm.value)
      const clienteData = this.clienteForm.value;
      //console.log('Cliente ingresado:', clienteData);

       
          this.http.post(this.apiUrl + '/clienteContacto/add', clienteData).subscribe(
            (data) => {
              alert('SE HA REGISTRADO CONTACTO');
              console.log(data);
              window.location.reload();
            },
            (error) => {
              console.log(clienteData);
              alert('ERROR AL REGISTRAR CONTACTO');
              console.error(error);
            }
          );
        } else {
          this.clienteForm.markAllAsTouched();
          alert('INGRESO NO VÁLIDO');
    }
  }


  closeDialog() {
    this.dialogRef.close();
  }
}