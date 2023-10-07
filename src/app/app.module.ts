import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { QuienesSomosComponent } from './home/quienes-somos/quienes-somos.component';
import { PiscinasComponent } from './home/piscinas/piscinas.component';
import { ComoTrabajamosComponent } from './home/como-trabajamos/como-trabajamos.component';
import { TestimoniosComponent } from './home/testimonios/testimonios.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';


const rutas:Routes=[
  {path:'',component:HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    QuienesSomosComponent,
    PiscinasComponent,
    ComoTrabajamosComponent,
    TestimoniosComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(rutas)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
