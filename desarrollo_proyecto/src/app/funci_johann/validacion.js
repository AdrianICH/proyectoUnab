function completa(nombre,nombre1){

//let pegar=nombre.concat(nombre1);

let pegar= nombre+" "+nombre1;

return pegar;

}



function mensaje2(){

nombre=prompt("Digite nombre: ");
nombre=nombre.toUpperCase();
nombre1=nombre.toLowerCase();
let pegar= completa(nombre,nombre1);


return pegar;
//alert(nombre1);


}




function mensaje1(){

//console.log("Oprimio el boton");
//alert("Oprimiendo el boton");
//document.write("oprimio el boton");

//tipo de dato numerico
//var edad=13;
//alert(edad);

//tipo de dato string
//var nombre="johann";
//var apellido="latorre";
//alert(nombre+" "+apellido);
//alert(nombre+" "+"\""+apellido+"\"");

//tipo de dato boolean
/*var nombre = true;
var nombre1=false;
alert(nombre1);
*/

//tipo de dato undefined
//var nombre;
//alert(nombre);

//tipo de dato null
/*var numero=10;
var numero=null;
alert(numero);*/

/* tipo de dato Nan*/
/*var texto= "Virtutienda";
alert(texto*2);
*/

/*tipo de dato (arreglo)*/
var vec=["cesar","johann","paola"];
vec[2]="Claudia";
vec[3]="Doris";

//var amigo=[vec.length];

vec.push("Katerine","Andrea","Paola");

/*Eliminar el ultimo del arreglo*/
vec.pop();
/*Conctenar dos arrelos +*/
var vec1=["nombre1","nombre2","nombre3"];
//var concatenados = vec + vec1;
var concatenados = vec.concat(vec1);


//concatenados.join(":");
//var ami= vec1.join(":");

/* ordenar de la a a la z un vector*/
//var ordenar=vec.sort();
//alert(ordenar);

/*revisar si algun dato se encuentra en el vector*/
//var encontrar = concatenados.includes("Andrea");
//alert(encontrar);

/*filtro segun la condicion me filtra los datos*/
/*var vec3=[1,2,3];
var filtrar = vec3.filter(num=>num>1);
alert(filtrar);
*/
/*Da true o false depende si se encontro el filtro*/
/*var vec3=[1,2,3];
var encontro= vec3.some(num => num>3);
alert(encontro);*/

//alert(concatenados);
//return concatenados

   // var numero=1;
/*
    if(numero>5 && numero <24){
        alert("NUmero esta en el rango");
    }else{

        alert("Numero no esta en el rango");
    }
    */
   /* a=1;
    while(numero<28){
     a=a+1;
     numero=numero+1;

    }
    alert(a);
    
    */
    /*a=1;
    for(i=0;i<5;i++){
        a=a+1;
        numero=numero+1;
    }
   // alert(a);
*/
  //  return a;

  
  //n=23668, d=6;
  //n=prompt("Digite numero N: ");
  //d=prompt("Digite numero D: ");
  
  //n=document.getElementById("numero_n");
  //d=document.getElementById("numero_d");
  n=document.getElementsByTagName("p")[3];
  d=document.getElementsByTagName("p")[4];
  
  n=n.innerHTML;
  d=d.innerHTML;

  reemplazados=0;
  cont=1,invertir=0,cifra=0;
  numero=n;
 
  while(numero!=0){
   numero=Math.trunc(numero/10);
   //alert(numero);
   cont=cont*10;
  }
  
  numero=n;

  for(i=0;numero!=0;i++){
     
      
      cifra=Math.trunc(numero%10);
    
      numero=Math.trunc(numero/10);
     
      if(cifra == d){
       
          cifra=1;
          
          reemplazados++;
          
      }
     
      invertir = invertir + (cifra*Math.trunc(cont/10));
      
      cont=Math.trunc(cont/10);
      


    }
    //alert(invertir);
    return invertir;
    //alert(invertir);
 
}
