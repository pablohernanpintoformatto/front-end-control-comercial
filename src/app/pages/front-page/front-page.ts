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

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatMenuModule, MatTabsModule, BarraVistas, TablaInfo], // Agregar los módulos aquí
  templateUrl: './front-page.html',
  styleUrls: ['./front-page.css'],
  encapsulation: ViewEncapsulation.None // 👈 ESTO ES LO QUE HACE QUE FUNCIONE

})
export class FrontPage {
  constructor(private router: Router) { }
  showFiller = false;
  logout() {
    localStorage.removeItem('token'); // Elimina el token
    this.router.navigate(['/login']); // Redirige al login
  }

/*   agregarReserva(id: number): void {
    this.dialog.open(AgregarReservaComponent, {
      data: { message: id, precio_noche: this.dataSource.data.find(item => item.id_estancia === id).precio_noche }
    });
  } */


}
