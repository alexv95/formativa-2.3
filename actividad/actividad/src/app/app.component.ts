import { Component } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  datos: string = "";

  formulario = new FormGroup({
    name: new FormControl('', Validators.required),
    email: new FormControl('',Validators.required),
    telephone: new FormControl('',Validators.pattern("^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{4}$")),
    
  });

  metodo(){
    this.datos = `Nombre=${this.formulario.value.name}
                  Telefono=${this.formulario.value.telephone}
                  Correo=${this.formulario.value.email}
                  `;
  }
}
