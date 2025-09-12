/*
document.addEventListener('DOMContentLoaded', function () {
  const contenido = document.getElementById('contenido');

  // Navegación (menu + anterior + siguiente reto)
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <a href="../index.html">Volver al Menú</a>
    <a href="../reto-3/reto-3.html">Anterior (Reto 3)</a>
    <a href="../reto-5/reto-5.html">Siguiente (Reto 5)</a>
  `;
});
*/
/*const numeroAdivinacion = Math.floor(Math.random() * (10 - 0 + 1) + 0);
let intento = "";
let acerto = false;

for(let contador = 0; contador < 3; contador++){    
    intento = prompt("Intenta adivinar el número del 0 al 10:");
    if(intento == numeroAdivinacion){
        alert(`¡Felicidades, acertaste! El número era ${numeroAdivinacion}.`);
        acerto = true;
        break;
    }
    alert("¡Incorrecto!");
}
if(!acerto){
    alert(`Desafortunadamente, no acertaste. ¡El número era ${numeroAdivinacion}!`);
}*/

let listaNumero = [0];
let limiteIntentos = 3;
let limiteNumeroOculto = 11;
let numeroOculto = 0;

const btnEnter = document.getElementById("txtNumero");

btnEnter.addEventListener("keydown", function(event) {
    if (event.key == "Enter") {
        valoresRegistro();
    }
});

function restauraTextBox(){
  document.querySelector("#txtNumero").value = "";
  document.getElementById("txtNumero").focus();
}

function valoresOriginales(){
  restauraTextBox();
  ocultarAlerta();
  document.getElementById("btnAceptar").disabled = false;
  document.getElementById("btnLimpiar").disabled = true;
  listaNumero = [0];
  numeroOcultoAsignado();
  contadorIntentos(listaNumero.length);
}

function valoresRegistro() {
  let usuarioNumero = document.getElementById("txtNumero").value;
    
  contadorIntentos(listaNumero.length);

  ocultarAlerta();
  if (usuarioNumero == "") {
    visionAlerta(`alerta`, `Ingrese un número del 1 al ${limiteNumeroOculto}`);
  } else if (usuarioNumero < 1 || usuarioNumero > limiteNumeroOculto) {
    visionAlerta(`alerta`, `Número no correcto. Ingrese un número del 1 al ${limiteNumeroOculto}`);
  } else {
    if (listaNumero.length == limiteIntentos) {
      visionAlerta(`resultados`, `Llegaste a tu limite de intentos. El número osulto es: ${numeroOculto}`);
      document.getElementById("btnAceptar").disabled = true;
      document.getElementById("btnLimpiar").disabled = false;
    } else {
      if (listaNumero.includes(usuarioNumero)) {
        visionAlerta(`alerta`, `El número ${usuarioNumero} ya lo utilizaste, ingresa otro número.`);
      } else {
        if (usuarioNumero == numeroOculto) {
          visionAlerta(`resultados`, `!Ganaste! El número oculto es: ${numeroOculto}`);
          document.getElementById("btnAceptar").disabled = true;
          document.getElementById("btnLimpiar").disabled = false; 
        } else {
          listaNumero.push(usuarioNumero); 
        }        
      }
    }
  }
  restauraTextBox();
}

function ocultarAlerta() {
  document.getElementById("alerta").style.display = "none";
  document.getElementById("resultados").style.display = "none";
}

function visionAlerta(alertaEmergente,mensajeAlerta) {
  document.getElementById(alertaEmergente).style.display = "block";
  asignarTextoElemento(alertaEmergente, mensajeAlerta);
}

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.getElementById(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function numeroOcultoAsignado() {
  numeroOculto = Math.floor(Math.random() * (limiteNumeroOculto + 1));
}

function contadorIntentos(numeroIntentosUsuario) {
  asignarTextoElemento("contadorIntentos", `Tienes ${numeroIntentosUsuario} de ${limiteIntentos}`);
}

valoresOriginales();