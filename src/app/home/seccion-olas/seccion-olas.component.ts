import { Component, OnInit } from '@angular/core';
import { Card } from 'src/app/models/Card';
import { UtilService } from 'src/app/services/util.service';

@Component({
  selector: 'app-seccion-olas',
  templateUrl: './seccion-olas.component.html',
  styleUrls: ['./seccion-olas.component.scss']
})
export class SeccionOlasComponent implements OnInit{

  cards : any;
  constructor(public cardService : UtilService){}

  ngOnInit(): void {
    
    this.cardService.getCard().subscribe({
      next : (card: any) => {
        this.cards = card;
      }
    })

  }


}
