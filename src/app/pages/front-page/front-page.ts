// src/app/pages/front-page/front-page.ts

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-front-page',
  standalone: true,
  imports: [],
  templateUrl: './front-page.html',
  styleUrl: './front-page.css'
})
export class FrontPage {
  constructor(private router: Router) {}

  logout() {
    localStorage.removeItem('token'); // Elimina el token
    this.router.navigate(['/login']); // Redirige al login
  }
}
