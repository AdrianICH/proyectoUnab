import { Component, OnInit } from '@angular/core';

declare var funcion1:any;
declare var funcion2:any;
declare var funcion3:any;
declare var resultado:any;
declare var mayormenor:any;

@Component({
  selector: 'app-default-cmpnnt',
  templateUrl: './default-cmpnnt.component.html',
  styleUrls: ['./default-cmpnnt.component.css']
})
export class DefaultCmpnntComponent implements OnInit {

  constructor() { }

  title="Formulario Ejemplo";
  resultado = "";
  mayormenor = "";

  onClick1(){
      this.resultado = funcion1(this.title);
  }

  onClick2(){
    this.mayormenor = funcion2();
  }

  onClick3(){
    funcion3();
  }

  ngOnInit(): void {
  }

}
