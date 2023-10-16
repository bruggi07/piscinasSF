import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArmadorComponent } from './paginas/armador/armador.component';

const rutas:Routes=[
  {path:'',component:HomeComponent},
  {path:'armador',component:ArmadorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas),],
  exports: [RouterModule]
})


export class AppRoutingModule { }
