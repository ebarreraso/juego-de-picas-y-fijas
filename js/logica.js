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
var numeroAdd = '';
var intentoNum = '';
var picas = 0;
var fijas = 0;
// variable que se usa para condicionar el fin del juego en caso de ser adivinado el dijito
var ganaJugador = false;

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

//Pinta el número oculto
function numAdv(){
    numPrincipal = document.getElementById('campoNumAdv').value;
    document.getElementById('NumOculto').innerHTML = numPrincipal;

    if(document.getElementById('campoNumAdv').onclick){
        document.getElementById('campoNumAdv').value  = '';
        document.getElementById('guardar').disabled  = true;
        document.getElementById('campoNumAdv').disabled  = true;
    }
    numeroAdd = numPrincipal.toString();
    console.log(numeroAdd);
}

function pujar(numPuja){
    numPuja = document.getElementById('campoNum').value;
    intentoNum = numPuja.toString();
    console.log(intentoNum);
    if(document.getElementById('puja').onclick){
        document.getElementById('valorAprox').reset();
        if(numeroAdd !='' && numeroAdd != null && intentoNum !='' &&  intentoNum != null){
            
            //Determina si hay fijas
            if(numeroAdd[0] == intentoNum[0])
                fijas++;
            if(numeroAdd[1] == intentoNum[1])
                fijas++;
            if(numeroAdd[2] == intentoNum[2])
                fijas++;
            if(numeroAdd[3] == intentoNum[3])
                fijas++;

            //Determinar si hay picas
            if(numeroAdd[0] == intentoNum[1] || numeroAdd[0] == intentoNum[2] || numeroAdd[0] == intentoNum[3])
            picas++;
            if(numeroAdd[1] == intentoNum[0] || numeroAdd[1] == intentoNum[2] || numeroAdd[1] == intentoNum[3])
            picas++;
            if(numeroAdd[2] == intentoNum[0] || numeroAdd[2] == intentoNum[1] || numeroAdd[2] == intentoNum[3])
            picas++;
            if(numeroAdd[3] == intentoNum[0] || numeroAdd[3] == intentoNum[1] || numeroAdd[3] == intentoNum[2])
            picas++;

            //Imprime en la tabla 
            if(document.getElementById('indiceIntento').innerHTML)
            document.getElementById('indiceIntento').innerHTML = parseInt(document.getElementById('indiceIntento').innerHTML)  + 1;
            else
            document.getElementById('indiceIntento').innerHTML = 1;


            document.getElementById('numeroIngr').innerHTML = numPuja;
            document.getElementById('valorAprox').innerHTML = ('tienes: '+fijas+' fijas y: '+picas+' picas');

        }else if(numeroAdd ==='' || numeroAdd === null || intentoNum === '' ||  intentoNum === null) {
            alert('no existe un numero para adivinar');
            alert('ingrese un numero a adivinar adivinar');
            document.getElementById('campoNum').value = '';
            document.getElementById('numeroIngr').innerHTML = numPuja;
            document.getElementById('valorAprox').innerHTML = ('');
            //Imprime en la tabla 
            if(document.getElementById('indiceIntento').innerHTML)
            document.getElementById('indiceIntento').innerHTML = parseInt(document.getElementById('indiceIntento').innerHTML);

        }

        if(intentoNum  == numeroAdd && intentoNum != '' && numeroAdd !=''){
            ganaJugador = true;
            alert('En hora buena has ganado');
            document.getElementById('puja').disabled  = true;
        }else if(document.getElementById('indiceIntento').innerHTML === 10){
            document.getElementById('puja').disabled  = true;
            alert('has fallado, agotaste todos tus intentos');
        }

        console.log(fijas);
        console.log(picas);
    }
}




// if(ganaJugador){
//     alert('En hora buena has ganado');
// }else
//     alert('lo sentimos, no has logrado completar el objetivo');

//Funcion que oculta el campo con el valor a adivinar
function mostrarResultado(){
    document.getElementById('NumOculto').style.color = 'transparent';
}


