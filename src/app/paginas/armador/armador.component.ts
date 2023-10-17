import { Component } from '@angular/core';
import { Menu } from 'src/app/models/Menu';
import { MenuService } from 'src/app/services/menu.service';

@Component({
  selector: 'app-armador',
  templateUrl: './armador.component.html',
  styleUrls: ['./armador.component.scss']
})
export class ArmadorComponent {
  constructor(public menuService: MenuService) { }
  
  
  menus: Menu[]=[];

  ngOnInit(){
    this.menuService.getMenu().subscribe(
      data => this.menus = data
      )
  }
}
