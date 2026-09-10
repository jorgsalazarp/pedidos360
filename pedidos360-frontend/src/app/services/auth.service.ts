import { Injectable, inject } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface RegistroPayLoad {
    nombre: string;
    apellido: string;
    correo: string;
    contrasena: string;
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    private http = inject(HttpClient);
    private apiUrl = '';

    registrar(datos: RegistroPayLoad): Observable<any> {
        return this.http.post(`${this.apiUrl}/register`, datos);
    }
}