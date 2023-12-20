import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  constructor(public router: Router, public scroll: UtilService) { }

  irA(el: string): void {
    this.scroll.scrollTo(el);
  }
}