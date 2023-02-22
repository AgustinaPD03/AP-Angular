import { Component } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-proyectod',
  templateUrl: './proyectod.component.html',
  styleUrls: ['./proyectod.component.css']
})
export class ProyectodComponent {
proyectoList:any;

constructor(private proyectos:DataService) { }

ngOnInit(): void {
  this.proyectos.obtenerDatos().subscribe(data=>{
    this.proyectoList=data.proyectos
  })
}
}
