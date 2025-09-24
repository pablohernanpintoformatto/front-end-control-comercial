import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class Auth {
  private apiUrl = 'http://localhost:3000/api/users'

  constructor(private http: HttpClient) {}

    // Método para hacer login
  login(credentials: { email: string, password: string }): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/login`, credentials).pipe(
      tap(response => {
        // Guardar el token en localStorage
        localStorage.setItem('token', response.token);
      })
    );
  }

  // Método para hacer logout
  logout(): void {
    localStorage.removeItem('token');
  }

  // Verificar si hay token
  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Obtener el token actual
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
