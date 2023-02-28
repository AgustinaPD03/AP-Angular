import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-e-estudios',
  templateUrl: './e-estudios.component.html',
  styleUrls: ['./e-estudios.component.css']
})
export class EEstudiosComponent implements OnInit{
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.form= this.formBuilder.group({
      name:['',[Validators.required]],
      que:['',[Validators.required]]
    })
  }

  ngOnInit(): void {}

  get Name(){
    return this.form.get("name");
  }

  get Que(){
    return this.form.get("que");
  }

  get NameValid() {
    return this.Name?.touched && !this.Name?.valid;
  }

  get QueValid() {
    return false
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault; 

    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Iniciando sesión!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }
}
