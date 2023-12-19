import { BootstrapOptions, Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit{

  productos: any;

  constructor(public producService: UtilService){}

  ngOnInit(): void {
    
    this.producService.getProductos().subscribe({
      next : (productos: any) => {
        this.productos = productos;
    }})


  }
}
