import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/models/Menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-armador',
  templateUrl: './armador.component.html',
  styleUrls: ['./armador.component.scss']
})
export class ArmadorComponent implements OnInit{

  menu: any
  subMenu: any
  
  constructor( public menuService : MenuService) { }
  
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
        this.menu = menu
        console.log(this.menu)
      }
      })
    }


}
