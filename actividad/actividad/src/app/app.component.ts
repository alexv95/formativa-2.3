import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datos: string = "";
  usuario !: Usuario;
  formulario = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required),
    telephone: new FormControl('',Validators.required),
    
  });
  
  metodo(){
    this.datos = `Nombre=${this.formulario.value.name}
                  Telefono=${this.formulario.value.telephone}
                  Correo=${this.formulario.value.email}
                  `;
    this.usuario = new Usuario(this.formulario.value.name,this.formulario.value.email,this.formulario.value.telephone);
  }
}

class Usuario  {
  constructor ( public name: string , public email :string , public telephone : string) {

  }
}
