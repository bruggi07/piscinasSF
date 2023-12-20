import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-armador',
  templateUrl: './armador.component.html',
  styleUrls: ['./armador.component.scss']
})

export class ArmadorComponent implements OnInit {

  menu: any
  subMenu: any
  presupuesto: string = "";
  localPres: any = sessionStorage.getItem('presu');
  msjT: string = "";
  msjC: string = "";
  msjP: string = "";
  msjS: string = "";
  msjE: string = "";
  msjL: string = "";

  constructor(public menuService: UtilService) { }

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
    // window.scrollTo(0, 0)
  }

  setPresu(input: string, flg: number, id: number): void {

    if (flg == 1) {
      if (id == 0) {
        this.msjT = 'de tamaño: ' + input;
      }

      if (id == 1) {
        this.msjC = ', de color: ' + input;
      }
      if (id == 2) {
        this.msjP = ', con el piso: ' + input;
      }
      if (id == 4) {
        this.msjL = ', luces de color: ' + input;
      }
    } else if (flg == 0) {
      if (id == 3) {
        this.msjS = ', con solarium';
      }
      if (id == 5) {
        this.msjE = ', con escaleras ';
      }
    }

    this.presupuesto = 'Hola, quisiera un presupuesto para una piscina ' + this.msjT + this.msjC + this.msjP + this.msjS + this.msjL + this.msjE;
    this.presupuesto = this.presupuesto.replace('undefined', '').trim();
    sessionStorage.setItem('presu', this.presupuesto);
  }

  reiniciarMsj(): void{
    this.presupuesto = '';
    sessionStorage.setItem('presu', '');
    window.location.reload();
  }
}
