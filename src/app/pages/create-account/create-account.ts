import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Auth } from '../../services/auth-service/auth';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  imports: [CommonModule,
    ReactiveFormsModule],
  templateUrl: './create-account.html',
  styleUrl: './create-account.css'
})
export class CreateAccount {

  registerForm: FormGroup;
  errorMessage = '';
  formSubmitted: boolean = false;


  areasTrabajo: string[] = [
    'Gerencia', 'Comercial', 'Adquisiciones', 'Transportes',
    'Mantención', 'Gerente Producción', 'Logistica', 'Diseño',
    'Jefe Producción', 'Supervisor Terreno', 'Bodega Pañol',
    'Control Calidad', 'Prevención Riesgo', 'Producción', 'RRHH',
    'Facturación y Cobranzas'
  ];


  constructor(
    private fb: FormBuilder,
    private authService: Auth,
    private router: Router,
    private http: HttpClient
  ) {
    this.registerForm = this.fb.group({
      nombre: ['', Validators.required],
      correo: ['', [Validators.required, Validators.email]],
      rut: ['', [Validators.required, rutValidator]],
      telefono: ['', [Validators.required, numeroValidator]],
      area_trabajo: ['', Validators.required],
      contrasenia: ['', [Validators.required, Validators.minLength(6)]],
      contrasenia2: ['', Validators.required]
    }, {
      validators: passwordMatchValidator

    });


  }

  inicio() {
    this.router.navigate(['/login'])
  }


  onSubmit() {
    this.formSubmitted = true

    if (this.registerForm.valid) {
      this.http.post(environment.apiUrl + "/users/register", this.registerForm.value).subscribe(
        (data) => {
          alert('Se ha registrado');
          console.log(data);
          this.router.navigate(['/login'])
        },
        (error) => {
          console.log(this.registerForm.value);
          alert('Error de registro');
          console.error(error);
        }
      );
    } else {
      alert('INGRESO NO VALIDO');
    }
  }

}

function passwordMatchValidator(group: FormGroup) {
  const pass = group.get('contrasenia')?.value;
  const confirmPass = group.get('contrasenia2')?.value;
  return pass === confirmPass ? null : { mismatch: true };
}


function numeroValidator(control: AbstractControl): ValidationErrors | null {
  const numero = control.value;

  if (!numero) return null; // No valida si está vacío (lo maneja Validators.required)

  // Verifica si el número tiene exactamente 9 dígitos y es un número positivo
  if (!/^\d{9}$/.test(numero)) {
    return { numeroInvalido: true };
  }
  return null;
}



function rutValidator(control: AbstractControl): ValidationErrors | null {
  const rut = control.value;

  if (!rut) return null; // No valida si está vacío (lo maneja Validators.required)

  const cleanRut = rut.replace(/[^0-9kK]/g, '').toUpperCase();

  if (!/^\d{7,8}[0-9K]$/.test(cleanRut)) {
    return { rutInvalido: true };
  }

  const cuerpo = cleanRut.slice(0, -1);
  const dv = cleanRut.slice(-1);

  let suma = 0;
  let multiplicador = 2;

  for (let i = cuerpo.length - 1; i >= 0; i--) {
    suma += parseInt(cuerpo[i], 10) * multiplicador;
    multiplicador = multiplicador < 7 ? multiplicador + 1 : 2;
  }

  const resto = 11 - (suma % 11);
  const dvEsperado = resto === 11 ? '0' : resto === 10 ? 'K' : String(resto);

  return dv === dvEsperado ? null : { rutInvalido: true };
}

