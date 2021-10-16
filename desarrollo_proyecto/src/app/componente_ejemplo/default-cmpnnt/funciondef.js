function funcion1() {
  var lista1 = ["Carlos", "Adrian"];
  var lista2 = ["Juliana", "Nathalia"];
  var juntos = lista1.concat(lista2);
  return juntos.join(" ");
}

function funcion2() {
  var nombre_def = prompt("Digite su nombre: ");
  nombre_def = nombre_def.toUpperCase();
  nombre_min = nombre_def.toLowerCase();
  joinname = nombre_def + " -> " + nombre_min;

  return joinname;
}

function funcion3() {
  var count = 0;
  //var n = "9667466";
  n = prompt("Digite numero N: ");
  //var b = "6";
  b = prompt("Digite numero B: ");
  var not_replaced = n;
  var invertido = "";

  invertido = not_replaced.split("").reverse().join("");
  n = invertido;

  while (n.includes(b)) {
    n = n.replace(b, "1");
    count++;
  }

  var text1 = ["Numero invertido: ",invertido," y numero con b cambiado: ",n,];

  var text2 = ["Cifras del numero ingresado: ",n.length,", numeros cambiados: ",count,", numeros no cambiados: ",n.length - count,];

  alert(text1.join(" "));
  alert(text2.join(" "));
}
