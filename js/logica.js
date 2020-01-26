'use strict'

// var formulario = document.querySelector("#correos");
// 	formulario.addEventListener('submit', function(){
// 		titulo = document.querySelector('#enviar').value;
// 		localStorage.setItem(titulo, titulo);
// });
	
// var comidas = [
//     { principal : 'arroz', secundario : 'frijol', jugo : 'lulo' },
//     { principal : 'pasta', secundario : 'albondigas', jugo : 'mora' },
//     { principal : 'sopa', secundario : 'banano', jugo : 'maracuya' },
//     { principal : 'alverjas', secundario : 'pure de papa', jugo : 'durasno' },
// ];

// var almuerzos = [];

// for(i = 0; i < comidas.length; i++){
//     almuerzos.push(comidas[i].principal.secundario.jugo);
// }

// console.log(almuerzos);


/*---------------------------------------------------------------------------------------------*/
/*-----------------------------------Programa Picas Fijas--------------------------------------*/
/*---------------------------------------------------------------------------------------------*/
        
var numPrincipal = '';
//Perminte enviar pujas de numeros ingresados
var numPuja = '';
var numIntentos = [];
var conteneNum = [];
var picas = 0;
var fijas = 0;


function limitar(e, contenido, caracteres)
{
    // obtenemos la tecla pulsada
    var unicode=e.keyCode? e.keyCode : e.charCode;
    // Permitimos las siguientes teclas:
    // 8 backspace
    // 46 suprimir
    // 13 enter
    // 9 tabulador
    // 37 izquierda
    // 39 derecha
    // 38 subir
    // 40 bajar
    if(unicode==8 || unicode==46 || unicode==13 || unicode==9 || unicode==37 || unicode==39 || unicode==38 || unicode==40)
        return true;
    // Si ha superado el limite de caracteres devolvemos false
    if(contenido.length>=caracteres)
        return false;
    return true;
}



// variable que se usa para condicionar el fin del juego en caso de ser adivinado el dijito
var ganaJugador = false;

//Pinta el número oculto
function numAdv(){
    numPrincipal = parseInt(document.getElementById('campoNumAdv').value);
    document.getElementById('NumOculto').innerHTML = numPrincipal;
    if(document.getElementById('campoNumAdv').onclick = true){
        document.getElementById('campoNumAdv').value  = '';
        document.getElementById('guardar').disabled  = true;
        document.getElementById('campoNumAdv').disabled  = true;
    }
    
    var numeroAdd = new Array(numPrincipal);
    console.log(numeroAdd.length);
    console.log(numPrincipal.split());
}

function pujar(numPuja){
    numPuja = parseInt(document.getElementById('campoNum').value);
        if(document.getElementById('campoNum').onclick = true){
        
        var intentoNum = new Array(numPuja);

        console.log(intentoNum);

        for(var i=0; i<=1; i++){
            //Determina si hay fijas
        if(numPrincipal[0] == intentoNum[0])
            fijas++;
        if(numPrincipal[1] == intentoNum[1])
            fijas++;
        if(numPrincipal[2] == intentoNum[2])
            fijas++;
        if(numPrincipal[3] == intentoNum[3])
            fijas++;
    
        }
        
        console.log(intentoNum[0])
    }

    //Imprime en la tabla 
    if(document.getElementById('indiceIntento').innerHTML)
        document.getElementById('indiceIntento').innerHTML = parseInt(document.getElementById('indiceIntento').innerHTML)  + 1;
    else
        document.getElementById('indiceIntento').innerHTML = 1;

    if(parseInt(document.getElementById('indiceIntento').innerHTML) == 10){
        document.getElementById('puja').disabled  = true;
        alert('has agotado todos tus intentos');
    }
    document.getElementById('numeroIngr').innerHTML = numPuja;

    

    // if(fijas == numPrincipal){
    //     if(numPrincipal == numPuja){
    //         document.getElementById('valorAprox').innerHTML = fijas;
    //         console.log("estoy entrando aqui");
    //         ganaJugador= true;
    //         parseInt(document.getElementById('indiceIntento').innerHTML) == 10;    
    //     }
        
    // }
    //     console.log(numPuja)
}

// function(){

//     //Determina si hay fijas
//     if(numPrincipal[0] == numPuja[0])
//         fijas++;
//     if(numPrincipal[1] == numPuja[1])
//         fijas++;
//     if(numPrincipal[2] == numPuja[2])
//         fijas++;
//     if(numPrincipal[3] == numPuja[3])
//         fijas++;

//     //Determina si hay picas
//     if(numPrincipal[0] == numPuja[1] || numPrincipal[0] == numPuja[2] || numPrincipal[0] == numPuja[3])
//         picas++;
//     if(numPrincipal[1] == numPuja[0] || numPrincipal[1] == numPuja[2] || numPrincipal[1] == numPuja[3])
//         picas++;
//     if(numPrincipal[2] == numPuja[0] || numPrincipal[2] == numPuja[1] || numPrincipal[2] == numPuja[3])
//         picas++;
//     if(numPrincipal[3] == numPuja[0] || numPrincipal[3] == numPuja[1] || numPrincipal[3] == numPuja[2])
//         picas++;

//  }


// if(ganaJugador){
//     alert('En hora buena has ganado');
// }else
//     alert('lo sentimos, no has logrado completar el objetivo');

//Funcion que oculta el campo con el valor a adivinar
function mostrarResultado(){
    document.getElementById('NumOculto').style.color = 'red';
}


