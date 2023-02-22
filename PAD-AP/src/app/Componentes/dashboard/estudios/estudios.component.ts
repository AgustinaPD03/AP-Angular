import { Component } from '@angular/core';
import { DataService } from 'src/assets/services/data.service';

@Component({
  selector: 'app-estudios',
  templateUrl: './estudios.component.html',
  styleUrls: ['./estudios.component.css']
})
export class EstudiosComponent {
  estudioList:any;
  
  constructor(private estudios:DataService) { }

  ngOnInit(): void {
    this.estudios.obtenerDatos().subscribe(data=>{
      this.estudioList=data.estudios
    })
  }
}
