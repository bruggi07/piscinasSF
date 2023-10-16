import { Component } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { GetUsuarioService } from 'src/app/services/get-usuario.service';

@Component({
  selector: 'app-armador',
  templateUrl: './armador.component.html',
  styleUrls: ['./armador.component.scss']
})
export class ArmadorComponent {
  constructor(public getUser:GetUsuarioService){}
  texto :any = "";

  getUsuario(){
    let user;
    this.getUser.getUsers().subscribe(data=>{
        
        
        this.texto = JSON.stringify(data)
    })
  }
}
