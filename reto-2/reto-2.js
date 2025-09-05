const boton = document.getElementById("btnAceptar");
    
document.addEventListener("DOMContentLoaded", function () {
  boton.addEventListener("click", function () {

    let nombre = document.getElementById("usuarioNombre").value;
    let edad = document.getElementById("usuarioEdad").value;
    let lenguaje = document.getElementById("usuarioLenguaje").value;

    console.log(nombre);
    console.log(edad);
    console.log(lenguaje);

    if (nombre == "" || edad == "" || lenguaje == "") {
      document.getElementById("alerta").textContent = "Complete la información solicitada";
      document.getElementById("alerta").style.visibility = "visible";
    } else {
      const mensaje = `!Buen día ${nombre}¡ Tu edad es de ${edad} años y estás aprendiendo ${lenguaje}!`;
      document.getElementById("resultados").textContent = mensaje;

      // Ejercicio opcional
      setTimeout(() => {
        const respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con 1 para SÍ o 2 para NO.`);
        if (respuesta == 1) {
          document.getElementById("resultadosAlerta").textContent = "😃 ¡Muy bien! Sigue estudiando y tendrás mucho éxito.";
        } else if (respuesta == 2) {
          document.getElementById("resultadosAlerta").textContent = "😕 Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?";
        }
      }, 500);

      activaLimpiar();
    }
  });
});

function valoresOriginales() {
  document.querySelector('#usuarioNombre').value = "";
  document.querySelector('#usuarioEdad').value = "";
  document.querySelector('#usuarioLenguaje').value = "";
  document.getElementById("usuarioNombre").focus();
  document.getElementById("resultados").style.visibility = "hidden";
  document.getElementById("resultados").innerHTML = "";
  document.getElementById("alerta").style.visibility = "hidden";
  document.getElementById("alerta").innerHTML = "";
  document.getElementById("resultadosAlerta").style.visibility = "hidden";
  document.getElementById("resultadosAlerta").innerHTML = "";
  document.getElementById("btnAceptar").disabled = false;
  document.getElementById("btnLimpiar").disabled = true;
}

function activaLimpiar() {
  document.getElementById("btnAceptar").disabled = true;
  document.getElementById("btnLimpiar").disabled = false;  
}

valoresOriginales();