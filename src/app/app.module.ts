import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SliderComponent } from './home/slider/slider.component';
import { ContactoComponent } from './home/contacto/contacto.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ArmadorComponent } from './paginas/armador/armador.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ArmadorPiletaComponent } from './components/armador-pileta/armador-pileta.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InicioComponent } from './home/inicio/inicio.component';
import { ProductosComponent } from './home/productos/productos.component';
import { SeccionOlasComponent } from './home/seccion-olas/seccion-olas.component';
import { NuestrosTrabajosComponent } from './home/nuestros-trabajos/nuestros-trabajos.component';
import { ValidacionComponent } from './home/validacion/validacion.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SliderComponent,
    ContactoComponent,
    HeaderComponent,
    FooterComponent,
    ArmadorComponent,
    ArmadorPiletaComponent,
    InicioComponent,
    ProductosComponent,
    SeccionOlasComponent,
    NuestrosTrabajosComponent,
    ValidacionComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
