import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GetUsuarioService {

  url:string = environment.urlUsuario
  constructor(public http: HttpClient) { }


   // obtener listado de usuarios
  getUsers(): Observable<Usuario[]> {
    return this.http.get<Usuario[]>(this.url)
  }

  // crear nuevo usuario
  crear(user:Usuario):Observable<Usuario>{
     return this.http.post<Usuario>(this.url, user)
  }

  eliminar(id:number){
    return this.http.delete(this.url+"/"+id)
  }


}
