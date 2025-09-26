// src/app/pages/front-page/front-page.ts

import { Component, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
import { MatTabsModule } from '@angular/material/tabs';
import { BarraVistas } from "../../components/barra-vistas/barra-vistas";
import { TablaInfo } from "../../components/tabla-info/tabla-info";
import { HttpClient } from '@angular/common/http';
import { MatDialog } from '@angular/material/dialog';
import { FormularioCgvConstructora } from '../../modales/formulario-cgv-constructora/formulario-cgv-constructora';
import { FormularioCliente } from '../../modales/formulario-cliente/formulario-cliente';
import { FormularioContactoCliente } from '../../modales/formulario-contacto-cliente/formulario-contacto-cliente';
@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatTabsModule, BarraVistas, TablaInfo], // Agregar los módulos aquí
  templateUrl: './front-page.html',
  styleUrls: ['./front-page.css'],

})
export class FrontPage {
  constructor(private router: Router,
    public dialog: MatDialog,
    private http: HttpClient
  ) { }
  showFiller = false;
  logout() {
    localStorage.removeItem('token'); // Elimina el token
    this.router.navigate(['/login']); // Redirige al login
  }


  agregarReserva(): void {
    this.dialog.open(FormularioCgvConstructora);
  }

  agregarCliente(): void {
    this.dialog.open(FormularioCliente)
  }

  agregarContacto(): void {
    this.dialog.open(FormularioContactoCliente)
  }


}
