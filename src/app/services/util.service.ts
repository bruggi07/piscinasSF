import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { Observable } from 'rxjs';
import { Menu } from '../models/Menu';
import { Card } from '../models/Card';
import { Productos } from '../models/Productos';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  urlMenu: string = environment.urlMenu;
  urlCards: string = environment.urlCards;
  urlProductos: string = environment.urlProductos

  constructor(public http: HttpClient,private router: Router,private location: Location) { }

  // obtener menu
  getMenu(): Observable<Menu[]> {
    return this.http.get<Menu[]>(this.urlMenu); Observable
  }

  //obtener cards
  getCard(): Observable<Card[]> {
    return this.http.get<Card[]>(this.urlCards); Observable
  }

  getProductos(): Observable<Productos[]> {
    return this.http.get<Productos[]>(this.urlProductos); Observable
  }

  scrollTo(el: string): void {
    let elemento = document.getElementById(el) as HTMLElement;
    let ruta = this.router.url
    if (elemento != null && ruta === '/') {
      elemento.scrollIntoView();
    }
    else{
      this.router.navigate(['/']);
      elemento.scrollIntoView();
      
    }
  }
}
