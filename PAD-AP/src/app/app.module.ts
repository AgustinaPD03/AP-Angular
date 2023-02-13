import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { DescComponent } from './Componentes/Sobre-Mi/desc/desc.component';
import { HabyExpComponent } from './Componentes/Sobre-Mi/haby-exp/haby-exp.component';
import { HabComponent } from './Componentes/Sobre-Mi/hab/hab.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { LogyRegComponent } from './Componentes/logy-reg/logy-reg.component';
import { LoginComponent } from './Componentes/logy-reg/login/login.component';
import { RegistroComponent } from './Componentes/logy-reg/registro/registro.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    DescComponent,
    HabyExpComponent,
    HabComponent,
    ProyectosComponent,
    FooterComponent,
    LogyRegComponent,
    LoginComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
