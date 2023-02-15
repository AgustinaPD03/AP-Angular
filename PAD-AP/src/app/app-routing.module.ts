import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './Componentes/dashboard/dashboard.component';
import { IndexComponent } from './Componentes/index/index.component';
import { LoginComponent } from './Componentes/log-yreg/login/login.component';
import { RegistroComponent } from './Componentes/log-yreg/registro/registro.component';

const routes: Routes = [
  {path: "", component: IndexComponent},
  {path: "Login", component: LoginComponent},
  {path: "Register", component: RegistroComponent},
  {path: "Dashboard", component: DashboardComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
