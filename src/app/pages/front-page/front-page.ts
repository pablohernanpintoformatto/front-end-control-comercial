// src/app/pages/front-page/front-page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatToolbarModule, MatSidenavModule, MatMenuModule], // Agregar los módulos aquí
  templateUrl: './front-page.html',
  styleUrls: ['./front-page.css']
})
export class FrontPage {
  constructor(private router: Router) { }
  showFiller = false;
  logout() {
    localStorage.removeItem('token'); // Elimina el token
    this.router.navigate(['/login']); // Redirige al login
  }
}
