import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Menu } from '../models/Menu';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  urlMenu:string = environment.urlMenu;
  urlSubMenu:string = environment.urlSubMenu;
  constructor(public http:HttpClient) { }

     // obtener menu
     getMenu(): Observable<Menu[]> {
      return this.http.get<Menu[]>(this.urlMenu);
    }
}
