import { Component } from '@angular/core';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  constructor(public scroll: UtilService) { }

  irA(el: string): void {
    this.scroll.scrollTo(el);
  }
}
