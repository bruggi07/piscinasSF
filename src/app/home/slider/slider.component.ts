import { BootstrapOptions, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent{


  fondoTar='assets/img/slider_home/fondo1.webp'
  images = [1, 2, 3, 4].map((n) => `assets/img/slider_home/image ${n}.webp`);
  
}
