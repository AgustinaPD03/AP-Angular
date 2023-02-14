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
import { IndexComponent } from './Componentes/index/index.component';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { EInicioComponent } from './Componentes/dashboard/e-inicio/e-inicio.component';
import { ESobreMiComponent } from './Componentes/dashboard/e-sobre-mi/e-sobre-mi.component';
import { EProyectosComponent } from './Componentes/dashboard/e-proyectos/e-proyectos.component';

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
    HabilidadesComponent,
    IndexComponent,
    DashboardComponent,
    EInicioComponent,
    ESobreMiComponent,
    EProyectosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
