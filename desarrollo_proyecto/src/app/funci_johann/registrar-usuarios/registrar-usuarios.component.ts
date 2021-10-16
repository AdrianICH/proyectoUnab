import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

declare var mensaje1:any;
declare var mensaje2:any;
declare var todovectorcompleto:any;

@Component({
  selector: 'app-registrar-usuarios',
  templateUrl: './registrar-usuarios.component.html',
  styleUrls: ['./registrar-usuarios.component.css']
})
export class RegistrarUsuariosComponent implements OnInit {

  //titulo = "profe johann";
  //todovectorcompleto ="";
    datosformulario = new FormGroup({
    sexo_usuario: new FormControl(''),
    nombre_usuario: new FormControl(''),
    correo_usuario: new FormControl(''),
    user_name: new FormControl(''),
    password: new FormControl(''),

  });
   

  altausuario(){
   alert(this.datosformulario.value.sexo_usuario);
  //  this.todovectorcompleto = mensaje1();
    

  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
