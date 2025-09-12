const contenido = document.getElementById('contenido');

let area = "";
let lenguaje = "";
let framework = "";
let otraTecnologia = "";
let respuestas = [];
let seleccionOpcion = "Selecciona una opción";

function desplegableArea() {  
  area = document.getElementById('seleccionArea').value;

  if (area == seleccionOpcion) {
    restauraValoresLenguaje();
  } else {
    document.getElementById("seleccionLenguaje").disabled = false;
    respuestas.push(area);
    alertas();
  }
}

function desplegableLenguaje() {
  lenguaje = document.getElementById("seleccionLenguaje").value;
  
  if (lenguaje == seleccionOpcion) {
    restauraValoresFramework();
  } else {
    document.getElementById("seleccionFramework").disabled = false;
    respuestas.push(lenguaje);
    alertas();
  }
}

function desplegableFramework() {
  framework = document.getElementById("seleccionFramework").value;

  if (framework == seleccionOpcion) {
    restauraValoresTecnologia();
    document.getElementById("btnAceptar").disabled = true;
  } else {
    document.getElementById("txtTecnologia").disabled = false;
    document.getElementById("btnAceptar").disabled = false;
    respuestas.push(framework);
    alertas();
  }
}

function restauraValoresArea() {
  document.getElementById("seleccionArea").selectedIndex = 0;
  restauraValoresLenguaje();
  restauraValoresFramework();
  restauraValoresTecnologia();
}

function restauraValoresLenguaje() {
  document.getElementById("seleccionLenguaje").selectedIndex = 0;
  document.getElementById("seleccionLenguaje").disabled = true;
  restauraValoresFramework();
  restauraValoresTecnologia();
}

function restauraValoresFramework() {
  document.getElementById("seleccionFramework").selectedIndex = 0;
  document.getElementById("seleccionFramework").disabled = true;
  document.getElementById("btnAceptar").disabled = true;
  restauraValoresTecnologia();
}

function restauraValoresTecnologia() {
  document.querySelector("#txtTecnologia").value = "";
  document.getElementById("txtTecnologia").disabled = true;
}

function alertas() {
  document.getElementById("alerta").style.visibility = "hidden";
  document.getElementById("alerta").innerHTML = "";
}

function valoresOriginales() {
  restauraValoresArea();
  alertas();
  respuestas = [];
}

function valoresRegistro() {
  otraTecnologia = document.getElementById("txtTecnologia").value;
  
  if (otraTecnologia.length > 0) {
    respuestas.push(otraTecnologia);
  }

  if (respuestas.length < 3) {
    document.getElementById("alerta").innerHTML = "Complete la información solicitada";
    document.getElementById("alerta").style.visibility = "visible";
  } else {
    document.getElementById("resultados1").textContent = `El área selaccionada es: ${respuestas[0]}`;
    document.getElementById("resultados2").textContent = `El lenguaje de programación selaccionado es: ${respuestas[1]}`;
    document.getElementById("resultados3").textContent = `El framework selaccionado es: ${respuestas[2]}`;
    if (respuestas[3] != undefined) {
      document.getElementById("resultados4").textContent = `Sugerencia de otras tecnologías es: ${respuestas[3]}`; 
    }
    valoresOriginales();
  }
}

valoresOriginales();