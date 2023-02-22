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
import { LogYRegComponent } from './Componentes/log-yreg/log-yreg.component';
import { LoginComponent } from './Componentes/log-yreg/login/login.component';
import { RegistroComponent } from './Componentes/log-yreg/registro/registro.component';
import { EstudiosComponent } from './Componentes/dashboard/estudios/estudios.component';
import { EEstudiosComponent } from './Componentes/dashboard/estudios/e-estudios/e-estudios.component';
import { DescripcionComponent } from './Componentes/dashboard/descripcion/descripcion.component';
import { HttpClientModule } from '@angular/common/http';
import { ExperienciasComponent } from './Componentes/dashboard/experiencias/experiencias.component';
import { EExperienciasComponent } from './Componentes/dashboard/experiencias/e-experiencias/e-experiencias.component';
import { Habilidades2Component } from './Componentes/dashboard/habilidades2/habilidades2.component';
import { ProyectodComponent } from './Componentes/dashboard/proyectod/proyectod.component';
import { EProyectoComponent } from './Componentes/dashboard/proyectod/e-proyecto/e-proyecto.component';
import { ModalGuardadoComponent } from './Componentes/navbar/modal-guardado/modal-guardado.component'

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
    LogYRegComponent,
    LoginComponent,
    RegistroComponent,
    EEstudiosComponent,
    EstudiosComponent,
    DescripcionComponent,
    ExperienciasComponent,
    EExperienciasComponent,
    Habilidades2Component,
    ProyectodComponent,
    EProyectoComponent,
    ModalGuardadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
