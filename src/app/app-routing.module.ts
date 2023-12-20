import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ArmadorComponent } from './paginas/armador/armador.component';
import { NotFoundComponent } from './not-found/not-found.component';

const rutas:Routes=[
  {path:'',component:HomeComponent},
  {path:'armador',component:ArmadorComponent},
  {path: '**', component:NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(rutas)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
