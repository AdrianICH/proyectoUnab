import { Component, OnInit } from '@angular/core';

declare var funcion1:any;
declare var funcion2:any;
declare var funcion3:any;

@Component({
  selector: 'app-default-cmpnnt',
  templateUrl: './default-cmpnnt.component.html',
  styleUrls: ['./default-cmpnnt.component.css']
})
export class DefaultCmpnntComponent implements OnInit {

  constructor() { }

  title="Hola en Angular";

  onClick1(){
    funcion1();
  }

  onClick2(){
    funcion2();
  }

  onClick3(){
    funcion3();
  }

  ngOnInit(): void {
  }

}
