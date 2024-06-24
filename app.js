let numeroSecreto = 0;
let numeroIntentos = 0;
let numerosSorteados = [];
let numeroMaximo = 10;

console.log(numeroSecreto);

function asignarTextoElemento(Elemento, Texto) {
    let elementoHTML = document.querySelector(Elemento);
    elementoHTML.innerHTML = Texto;
    return;
}

function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
   
    if (numeroUsuario === numeroSecreto) {
        asignarTextoElemento('p', `Acertaste el numero en ${numeroIntentos} ${(numeroIntentos === 1) ? 'vez' : 'veces'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numeroUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El numero secreto es menor');
        } else {
            asignarTextoElemento('p', 'El numero secreto es mayor');
        }
        numeroIntentos++;
        limpiarCaja();
    }

    return;
}

function limpiarCaja() {
    document.querySelector('#valorUsuario').value = '';
    
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1;
    //si el numero esta generador en la lista
    console.log(numeroGenerado);
    console.log(numerosSorteados);
    //si ya sorteamos todos los numeros
    if (numerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    } else {
        
            if (numerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto();
        } else {
            numerosSorteados.push(numeroGenerado);
            return numeroGenerado;     
        }
    }    
}
function condicionesIniciales() {
    asignarTextoElemento("h1", "Juego del Numero Secreto");
    asignarTextoElemento("p", `Escribe un Numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    numeroIntentos = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
    
    
}
condicionesIniciales();


