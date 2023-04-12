import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { sesionUsuario } from 'src/app/Model/sesion';

@Injectable({
  providedIn: 'root'
})
export class LoginApiService {

  //cabeceras http
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http:HttpClient) { }


    /* Pantalla sesion - validar usuario */
    getValidacionUsuario(email:any, pass:any): Observable<any> {
      console.log(email);
      console.log(pass);
      debugger
      
      return this.http.get<sesionUsuario[]>('https://localhost:44363/sesion?'+"email="+email+"&"+"password="+pass); /* email=example@hotmail.com&password=123'); */
    }
}
