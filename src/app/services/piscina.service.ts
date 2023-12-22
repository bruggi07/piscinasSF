import { Injectable } from '@angular/core';
import { PiscinaDTO } from '../models/PiscinaDTO';

@Injectable({
  providedIn: 'root'
})
export class PiscinaService {
  constructor() { }

  setPiscinaTamano(Piscina: PiscinaDTO, input: string): void{
    if (Piscina.getTamaño() != input) {
      Piscina.setTamaño(input);
    }else{
      Piscina.setTamaño('');
    }
    localStorage.setItem('PiscLocal',JSON.stringify(Piscina));
  }
  setPiscinaColor(Piscina: PiscinaDTO, input: string): void{
    if (Piscina.getColor() != input) {
      Piscina.setColor(input);
    }else{
      Piscina.setColor('');
    }
    localStorage.setItem('PiscLocal',JSON.stringify(Piscina));
  }
  setPiscinaPiso(Piscina: PiscinaDTO, input: string): void{
    if (Piscina.getPiso() != input) {
      Piscina.setPiso(input);
    }else{
      Piscina.setPiso('');
    }
    localStorage.setItem('PiscLocal',JSON.stringify(Piscina));
  }
  setPiscinaLuces(Piscina: PiscinaDTO, input: string): void{
    if (Piscina.getLuces() != input) {
      Piscina.setLuces(input);
    }else{
      Piscina.setLuces('');
    }
    localStorage.setItem('PiscLocal',JSON.stringify(Piscina));
  }
  setPiscinaSolarium(Piscina: PiscinaDTO, input: string): void{
    if (Piscina.getSolarium() != input) {
      Piscina.setSolarium(input);
    }else{
      Piscina.setSolarium('');
    }
    localStorage.setItem('PiscLocal',JSON.stringify(Piscina));
  }
  setPiscinaEscaleras(Piscina: PiscinaDTO, input: string): void{
    if (Piscina.getEscaleras() != input) {
      Piscina.setEscaleras(input);
    }else{
      Piscina.setEscaleras('');
    }
    localStorage.setItem('PiscLocal',JSON.stringify(Piscina));
  }
  
}
