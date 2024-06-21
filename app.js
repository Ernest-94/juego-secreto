/*let titulo=document.querySelector('h1');
titulo.innerHTML="Juego del Número Secreto";*/

//let parrafo=document.querySelector("p");
//parrafo.innerHTML="Escoge un número del 1 al 10";

let numeroSecreto;
let intentos;
let listaNumerosSorteados=[];
let numeroMaximo=10;
let intentosMaximos=5;


function verificarIntento(){
    let numeroDeUsuario=parseInt(document.getElementById("valorUsuario").value);
    if(numeroDeUsuario===numeroSecreto){
        asignarTextoElemento("p",`Acertó el número secreto en ${intentos} ${(intentos==1)?"intento":"intentos"}!!!`);
        document.querySelector("#reiniciar").removeAttribute("disabled");
    }else{
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento("p","El número secreto es menor");
        }else{
            asignarTextoElemento("p","El número secreto es mayor");
        }
        limpiarCaja();
        if (intentos>=intentosMaximos){
            /*Este código debe ocurrir antes que aumentemos el número de intentos porque si no puede provocar que el número
            real de intentos que tenga el jugador se vea disminuido en 1*/
            asignarTextoElemento("p","Se ha llegado al número máximo de intentos.");
            document.querySelector("#intentar").setAttribute("disabled","true");

        }
        intentos++;
    }
    return;
}

function asignarTextoElemento(elemento,texto){
    let elementoHTML=document.querySelector(elemento);
    elementoHTML.innerHTML=texto;
    return;
}

function generarNumeroAleatorio(){

    let numeroAleatorio=Math.floor(Math.random()*numeroMaximo)+1;
    console.log(numeroAleatorio);
    if(listaNumerosSorteados.length>=numeroMaximo){
        asignarTextoElemento("p","Ya se sortearon todos los números posibles.");
    }else{
        if(listaNumerosSorteados.includes(numeroAleatorio)){
            return generarNumeroAleatorio();
        }else{
            listaNumerosSorteados.push(numeroAleatorio);
            return numeroAleatorio
        }
    }
}

function limpiarCaja(){
    document.querySelector("#valorUsuario").value="";
}
function reiniciarJuego(){
    limpiarCaja();
    condicionesIniciales();
    document.querySelector("#reiniciar").setAttribute("disabled","true")
    

}

function condicionesIniciales(){
    asignarTextoElemento("h1","Juego del Número Secreto");
    asignarTextoElemento("p",`Escoge un número del 1 al ${numeroMaximo}`);
    numeroSecreto=generarNumeroAleatorio();
    intentos=1;
}

condicionesIniciales();















/*function holaMundo(){
    console.log("Hola Mundo");
}

function holaPersona(persona){
    console.log(`Hola ${persona}!`);
}

function dobleNumero(numero){
    console.log(parseInt(numero+numero));
    return parseInt(numero+numero);
}

function promedioDeTres(numero1,numero2,numero3){
    let suma3=parseInt(numero1+numero2+numero3);
    let promedio3=suma3/3;
    console.log(promedio3);
    return promedio3;
}

function numeroMayor(numeroA,numeroB){
    if (numeroA>numeroB){
        console.log(`${numeroA} es mayor a ${numeroB}!`);
        return numeroA;
    }else if(numeroB>numeroA){
        console.log(`${numeroB} es mayor a ${numeroA}!`);
        return numeroB;
    }else{
        console.log("Los dos son iguales o no se pueden medir");
        return;
    }
}

function numeroAlCuadrado(numerox){
    console.log(parseInt(numerox*numerox));
    return parseInt(numerox*numerox);
}

holaMundo();
holaPersona("aadfadfa");
dobleNumero(4);
promedioDeTres(4,6,66);
numeroMayor(4,595955);
numeroAlCuadrado(4);*/