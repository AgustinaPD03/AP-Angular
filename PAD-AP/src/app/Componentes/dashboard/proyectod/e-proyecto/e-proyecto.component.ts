import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-e-proyecto',
  templateUrl: './e-proyecto.component.html',
  styleUrls: ['./e-proyecto.component.css']
})
export class EProyectoComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder){
    this.form=this.formBuilder.group({
      name:['',[Validators.required, Validators.maxLength(20)]],
      desc:['',[Validators.required, Validators.maxLength(100)]],
      linkp:['',[Validators.required, Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]],
      linkg:['',[Validators.pattern(/^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/)]]
    })
  }
  ngOnInit(): void {}
    get Name(){
    return this.form.get("name");
  }
  get Desc(){
    return this.form.get("desc");
  }
  get Linkp(){
    return this.form.get("linkp");
  }
  get Linkg(){
    return this.form.get("linkg");
  }

  get NameValid(){
    return this.Name?.touched && !this.Name?.valid;
  }
  get DescValid() {
    return false
  }
  get LinkpValid() {
    return false
  }
  get LinkgValid() {
    return false
  }

  onEnviar(event: Event){
    // Detenemos la propagación o ejecución del compotamiento submit de un form
    event.preventDefault(); 
 
    if (this.form.valid){
      // Llamamos a nuestro servicio para enviar los datos al servidor
      // También podríamos ejecutar alguna lógica extra
      alert("Todo salio bien ¡Guardando cambios!")
    }else{
      // Corremos todas las validaciones para que se ejecuten los mensajes de error en el template     
      this.form.markAllAsTouched(); 
    }
  }

}
