import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-armador',
  templateUrl: './armador.component.html',
  styleUrls: ['./armador.component.scss']
})

export class ArmadorComponent implements OnInit{

  menu: any
  subMenu: any
  presupuesto: string= "";

  constructor( public menuService : UtilService) { }
  
  showmenu(radID : number):void{

    let ID = new Number(radID);
    let check = document.getElementById(ID.toString()) as HTMLInputElement | null;

    if (check != null) {
      check.checked ? check.checked = false : check.checked = true;
    }
  }

  ngOnInit (): void{
    this.menuService.getMenu().subscribe({
       next:  (menu : any) => {
        this.menu = menu;
      }
      })
    }

    setPresu(input: string,menu:any): void {
      console.log(this.menu['Tamaño']);
      let m =  JSON.stringify(menu);
      if (!this.presupuesto.includes(input)) {
        this.presupuesto += ' ' + input + ' ' + m;
      }
      
      
    }

}
