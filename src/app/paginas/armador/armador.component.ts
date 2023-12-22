import { Component, OnInit } from '@angular/core';
import { PiscinaDTO } from 'src/app/models/PiscinaDTO';
import { PiscinaService } from 'src/app/services/piscina.service';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-armador',
  templateUrl: './armador.component.html',
  styleUrls: ['./armador.component.scss']
})

export class ArmadorComponent implements OnInit{

  menu: any;
  subMenu: any;
  Msjpresupuesto: string = "";
  localPres: any = sessionStorage.getItem('presu');
  Piscina: any;

  constructor(public menuService: UtilService, private p : PiscinaService) { }

  showmenu(radID: number): void {

    let ID = new Number(radID);
    let check = document.getElementById(ID.toString()) as HTMLInputElement | null;

    if (check != null) {
      check.checked ? check.checked = false : check.checked = true;
    }
  }

  ngOnInit(): void {

    this.menuService.getMenu().subscribe({
      next: (menu: any) => {
        this.menu = menu;
      }
    })
    if (!sessionStorage.getItem('presu')) {
      sessionStorage.setItem('presu', '');
    }

    this.Piscina = new PiscinaDTO();
  }



  setPresu(input: string, flg: number, id: number): void {

    if (flg == 1) {
      if (id == 0) {
        this.p.setPiscinaTamano(this.Piscina, input);
      }
      if (id == 1) {
        this.p.setPiscinaColor(this.Piscina, input);
      }
      if (id == 2) {
        this.p.setPiscinaPiso(this.Piscina, input);
      }
      if (id == 4) {
        this.p.setPiscinaLuces(this.Piscina, input);
      }
    } else if (flg == 0) {
      if (id == 3) {
        this.p.setPiscinaSolarium(this.Piscina, input);
      }
      if (id == 5) {
        this.p.setPiscinaEscaleras(this.Piscina, input);
      }
    }
    this.crearMensaje();
    
    // this.presupuesto = this.presupuesto.replace('undefined', '').trim();
    sessionStorage.setItem('presu', this.Msjpresupuesto);
  }

  crearMensaje(): void {
    if (this.Piscina.getDataStatus()) {
      this.Msjpresupuesto = 'Hola, quisiera un presupuesto para una piscina ' + this.Piscina.getMsjTamaño() + this.Piscina.getMsjColor() + this.Piscina.getMsjPiso() + this.Piscina.getMsjSolarium() + this.Piscina.getMsjLuces() + this.Piscina.getMsjEscaleras();
    }
  }

  reiniciarMsj(): void{
    this.Msjpresupuesto = '';
    sessionStorage.setItem('presu', '');
    localStorage.setItem('PiscLocal','');
    window.location.reload();
  }
}
