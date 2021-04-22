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
    email: new FormControl('', [Validators.required, Validators.email]),
    telephone: new FormControl('', [Validators.required, Validators.pattern('(\\+\\d{1,2}\\s)?\\(?\\d{3}\\)?[\\s.-]\\d{3}[\\s.-]\\d{4}')]),

  });

  metodo() {
    if (this.formulario.value.name != "" && this.formulario.value.telephone != "" && this.formulario.value.email != "") {
      if (this.formulario.value.name.length >= 4 && this.formulario.value.name.length <= 10) {
        this.datos = `Nombre=${this.formulario.value.name}
      Telefono=${this.formulario.value.telephone}
      Correo=${this.formulario.value.email}
      `;
        this.usuario = new Usuario(this.formulario.value.name, this.formulario.value.email, this.formulario.value.telephone);
      }
    }
    else {
      alert("Complete todos los campos!");
    }
  }
}

class Usuario {
  constructor(public name: string, public email: string, public telephone: string) {

  }
}
