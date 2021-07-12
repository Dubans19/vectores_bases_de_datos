


/* a. tamaño del vector 1 es de 15 elementos*/ 
var numeros_pares=["30","28","26","24","22","20","18","16","14","12","10","8","6","4","2"];
console.log(numeros_pares);
console.log("son " + numeros_pares.length + " elementos");

/* b. tamaño del vector 2 es de 15 elementos*/ 
var numeros_impares=["1","3","5","7","9","11","13","15","17","19","21","23","25","27","29"];
console.log(numeros_impares)
console.log(numeros_impares.length);

/* c. El usuario del software (lenguaje elegido) mediante una constante N debe indicar cuantos elementos quiere leer de los 15 posibles */

for(var n=0;n<numeros_pares.length-10;n++){
    console.log(numeros_pares[n]);
}
 
/* f .Después de ser leídos los valores en ambos vectores, estos deben ser mostrados de forma ordenada ascendentemente (Menor a Mayor)*/

var numer =numeros_pares.reverse();

console.log(numer);


/* g. Mostrar una lista con la suma de ambos vectores según su posición. */

var suma=numeros_pares + numeros_impares;
console.log(suma);

sumar= numeros_pares.length+ numeros_impares.length

console.log(sumar);

/*Segundo Desarrollo - Reto 2 (Estructuras simples, vectores y matrices avanzadas) - 10%*/




var vacas=["lola","fortuna","estrella"] 
var litrosl=[[11,10,9],[7,6,10],[8,10,9],[9,10,8],[8,8,10],[10,9,8],[9,10,9]];

/*suma lunes*/
let sumando1=litrosl[0].reduce((a,b)=>a+b,0);
console.log(sumando1);

/*suma martes*/

let sumando2=litrosl[1].reduce((a,b)=>a+b,0);
console.log(sumando2);
/*suma miercoles*/

let sumando3=litrosl[2].reduce((a,b)=>a+b,0);
console.log(sumando3);
/*suma jueves*/

let sumando4=litrosl[3].reduce((a,b)=>a+b,0);
console.log(sumando4);
/*suma viernes*/

let sumando5=litrosl[4].reduce((a,b)=>a+b,0);
console.log(sumando5);
/*suma sabado*/

let sumando6=litrosl[5].reduce((a,b)=>a+b,0);
console.log(sumando6);
/*suma domingo*/

let sumando7=litrosl[6].reduce((a,b)=>a+b,0);
console.log(sumando7);


var dias= [
    "lunes","martes","miercoles","jueves","viernes","sabado","domingo"];

    console.log("producción Total del hato en cada uno de los 7 dias")

console.log( " el  " +  dias[0]   +  vacas  + " dieron " +  sumando1 + " litros de leche ");
console.log( " el  " +  dias[1]   +  vacas  + " dieron " +  sumando2 + " litros de leche ");
console.log( " el  " +  dias[2]   +  vacas  + " dieron " +  sumando3 + " litros de leche ") 

console.log( " el  " +  dias[3]   +  vacas  + " dieron " +  sumando4 + " litros de leche ") 

console.log( " el  " +  dias[4]   +  vacas  + " dieron " +  sumando5 + " litros de leche ") 

console.log( " el  " +  dias[5]   +  vacas  + " dieron " +  sumando6 + " litros de leche ") 

console.log( " el  " +  dias[6]   +  vacas  + " dieron " +  sumando7 + " litros de leche ") ;





/*Día de la semana con mayor y menor producción.*/

console.log("mayor produccion")
if (sumando1>sumando2) {
    console.log("el dia con mayor produccion es el lunes con " + sumando1 + " litros de leche")
    
} else if(sumando2>sumando3) {
    console.log("el dia con mayor produccion es el martes con " + sumando2 + " litros de leche")
} else if(sumando3>sumando4) {
    console.log("el dia con mayor produccion es el miercoles con " + sumando3 + " litros de leche")
} else if(sumando4>sumando5) {
    console.log("el dia con mayor produccion es el jueves con " + sumando4 + " litros de leche")
}else if(sumando5>sumando6) {
    console.log("el dia con mayor produccion es el viernes con " + sumando5 + " litros de leche")
} else if(sumando6>sumando7) {
    console.log("el dia con mayor produccion es el sabado con " + sumando6 + " litros de leche")
}else{console.log("el dia con mayor produccion es el domingo con " + sumando7 + " litros de leche")};


console.log("menor produccion")
if (sumando1<sumando2) {
    console.log("el dia con menor produccion es el lunes con " + sumando1 + " litros de leche")
    
} else if(sumando2<sumando3) {
    console.log("el dia con menor produccion es el martes con " + sumando2 + " litros de leche")
} else if(sumando3<sumando4) {
    console.log("el dia con menor produccion es el miercoles con " + sumando3 + " litros de leche")
} else if(sumando4<sumando5) {
    console.log("el dia con menor produccion es el jueves con " + sumando4 + " litros de leche")
}else if(sumando5<sumando6) {
    console.log("el dia con menor produccion es el viernes con " + sumando5 + " litros de leche")
} else if(sumando6<sumando7) {
    console.log("el dia con menor produccion es el sabado con " + sumando6 + " litros de leche")
}else{console.log("el dia con menor produccion es el domingo con " + sumando7 + " litros de leche")};




if(litrosl[0][0]>0){
   console.log("la vaca que dio mas leche el lunes  es lola") 
} else if(litrosl[0][1]>0){
       console.log("la vaca que dio mas leche el lunes es fortuna") 
}else{
     console.log("la vaca que dio mas leche el lunes es estrella") 
}


