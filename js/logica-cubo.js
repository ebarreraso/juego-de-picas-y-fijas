'use strict'

// var numeros = [1,2,3,4,5,6,7,8,9];
// var numeroAleatorios = [];
// var a = [];
// var existe = false;

// for(var i=0; i<numeros.length; i++){
//     numeroAleatorios[i] = Math.trunc(Math.random(numeros)*10);
//     existe = true;
//     while(!existe){

//     }
// }


// console.log(numeroAleatorios);
// console.log(a);

// ---Ejercicio 4 ---//

// var usuario = parseInt(prompt('dijite un número entero aleatorio'));
// var h = 0;
// var g = 1;

// var a = [1,2,3,4,5,6,7,8,9,10];
// var existe = false;
// for(var j=0; j<a.length; j++){
//     if(usuario == a[j]){
//         existe=true;
        
//     }
// }

// for(var i=0; i<a.length; i++){
//     h = h+a[i];
//     g = g*a[i];
// }

// if(existe){
//     alert('el numero: '+usuario+ 'esta en la lista')
// }else
// alert('el numero: '+usuario+ ' NO esta en la lista')



// alert('la suma total del array es: '+h)
// alert('la multiplicatoria total del array es: '+g)



    
// ---Ejercicio 5 Matriz multidimencional ---//



// var a = 0;
// var b = 1;
// var usuario = prompt('Ingrese un dijito para realizar la operación: ');
// var existe = false;

// var arreglo = new Array(3);
// arreglo[0] = new Array(3);
// arreglo[1] = new Array(3);
// arreglo[2] = new Array(3);

// // Fila 0
// arreglo[0][0] = 1;
// arreglo[0][1] = 2;
// arreglo[0][2] = 3;

// // Fila 1
// arreglo[1][0] = 4;
// arreglo[1][1] = 5;
// arreglo[1][2] = 6;

// // Fila 2
// arreglo[2][0] = 7;
// arreglo[2][1] = 8;
// arreglo[2][2] = 9;

// //recorre las dos dimensiones de la matriz
// for(var i=0; i<arreglo.length; i++){
//     for(var h=0; h<arreglo.length; h++){
//         a = a+arreglo[i][h]
//         b = b*arreglo[i][h]
//         if(usuario == arreglo[i][h])
//         existe = true;
//     }
// }

// console.log(a);
// console.log(b);
// console.log(arreglo[1][1])

// //valida si existe el número ingresado, dentro de la matriz
// if(existe){
//     alert('existe el numero')
// }else 
//     alert('no existe el numero')


// ---Ejercicio 6 Matriz multidimencional - suma de diagonales--- //


var arreglo = new Array(5);
arreglo[0] = new Array(5);
arreglo[1] = new Array(5);
arreglo[2] = new Array(5);
arreglo[3] = new Array(5);
arreglo[4] = new Array(5);

//fila 1
arreglo[0][0] = 1;
arreglo[0][1] = 2;
arreglo[0][2] = 3;
arreglo[0][3] = 4;
arreglo[0][4] = 5;

//fila 2
arreglo[1][0] = 6;
arreglo[1][1] = 7;
arreglo[1][2] = 8;
arreglo[1][3] = 9;
arreglo[1][4] = 10;

//fila 3
arreglo[2][0] = 11;
arreglo[2][1] = 12;
arreglo[2][2] = 13;
arreglo[2][3] = 14;
arreglo[2][4] = 15;

//fila 4
arreglo[3][0] = 16;
arreglo[3][1] = 17;
arreglo[3][2] = 18;
arreglo[3][3] = 19;
arreglo[3][4] = 20;

//fila 5
arreglo[4][0] = 21;
arreglo[4][1] = 22;
arreglo[4][2] = 23;
arreglo[4][3] = 24;
arreglo[4][4] = 25;

var suma = 0;


for(var h=0; h<arreglo.length; h++){
    for(var n=4; n>arreglo.length; n--){
        suma= suma+arreglo[h][n]; 
    }
}


alert('la suma de los números en la diagonal de Iz a De es: ' +suma)
// alert('la suma de los números en la diagonal de De a Iz es: ' +diagonalDos+ ' y su multiplicación es '+diagonalDosMul)


