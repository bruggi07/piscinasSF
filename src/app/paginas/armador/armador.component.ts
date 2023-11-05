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
  
  constructor( public menuService : MenuService) { }
  
  showmenu(radID : string):void{
    let check = document.getElementById(radID) as HTMLInputElement | null
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
