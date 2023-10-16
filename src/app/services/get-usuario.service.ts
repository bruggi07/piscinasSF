import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Usuario } from '../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class GetUsuarioService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any> {
    return this.http.get('/api/test')
    
  }
}
