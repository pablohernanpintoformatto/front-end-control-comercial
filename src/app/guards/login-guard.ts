// src/app/guards/login-guard.ts
import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { jwtDecode } from 'jwt-decode';

function isTokenExpired(token: string): boolean {
  try {
    const decoded: any = jwtDecode(token);
    const exp = decoded.exp;
    return Date.now() >= exp * 1000;
  } catch {
    return true; // Si falla el decode, lo consideramos expirado o inválido
  }
}

export const loginGuard: CanActivateFn = () => {
  const router = inject(Router);
  const token = localStorage.getItem('token');

  // Si hay token válido, redirige al usuario fuera del login
  if (token && !isTokenExpired(token)) {
    router.navigate(['/page']);
    return false;
  }

  return true; // Si no hay token o está vencido, permite entrar al login
};
