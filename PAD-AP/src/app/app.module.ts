import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Componentes/navbar/navbar.component';
import { InicioComponent } from './Componentes/inicio/inicio.component';
import { ProyectosComponent } from './Componentes/proyectos/proyectos.component';
import { FooterComponent } from './Componentes/footer/footer.component';
import { SobreMi2Component } from './Componentes/sobre-mi2/sobre-mi2.component';
import { HabyexpComponent } from './Componentes/sobre-mi2/habyexp/habyexp.component';
import { DesscpComponent } from './Componentes/sobre-mi2/desscp/desscp.component';
import { HabilidadesComponent } from './Componentes/sobre-mi2/habilidades/habilidades.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    InicioComponent,
    ProyectosComponent,
    FooterComponent,
    SobreMi2Component,
    HabyexpComponent,
    DesscpComponent,
    HabilidadesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
