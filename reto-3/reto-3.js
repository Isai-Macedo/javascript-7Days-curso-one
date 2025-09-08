const contenido = document.getElementById('contenido');

let area = "";
let lenguaje = "";
let framework = "";
let otraTecnologia = "";
let respuestas = [];
let seleccionOpcion = "Selecciona una opción";

/*
document.addEventListener('DOMContentLoaded', function () {
  // Paso 1
  document.getElementById('are').addEventListener('change', () => {
    

    if (!area) return alert('Debes elegir un área');
    respuestas.area = area;

    // Mostrar paso 2 según el área elegida
    const paso2 = document.getElementById('paso2');
    paso2.style.display = 'block';
    if (area === 'front-end') {
      paso2.innerHTML = `
        <label>¿Qué quieres aprender?</label>
        <select id="lenguaje">
          <option value="">--Selecciona--</option>
          <option value="react">React</option>
          <option value="vue">Vue</option>
        </select>
        <button id="btnLenguaje">Siguiente</button>
      `;
    } else {
      paso2.innerHTML = `
        <label>¿Qué quieres aprender?</label>
        <select id="lenguaje">
          <option value="">--Selecciona--</option>
          <option value="c#">C#</option>
          <option value="java">Java</option>
        </select>
        <button id="btnLenguaje">Siguiente</button>
      `;
    }

    // Paso 2
    document.getElementById('btnLenguaje').addEventListener('click', () => {
      const lenguaje = document.getElementById('lenguaje').value;
      if (!lenguaje) return alert('Debes elegir un lenguaje');
      respuestas.lenguaje = lenguaje;

      // Mostrar paso 3
      const paso3 = document.getElementById('paso3');
      paso3.style.display = 'block';
      paso3.innerHTML = `
        <label>¿Especializarse o Fullstack?</label>
        <select id="desarrollo">
          <option value="">--Selecciona--</option>
          <option value="especializar">Especializar</option>
          <option value="fullstack">Fullstack</option>
        </select>
        <button id="btnDesarrollo">Siguiente</button>
      `;

      // Paso 3
      document.getElementById('btnDesarrollo').addEventListener('click', () => {
        const desarrollo = document.getElementById('desarrollo').value;
        if (!desarrollo) return alert('Debes elegir una opción');
        respuestas.desarrollo = desarrollo;

        // Mostrar paso 4
        const paso4 = document.getElementById('paso4');
        paso4.style.display = 'block';
        paso4.innerHTML = `
          <label>Otras tecnologías que quieras aprender:</label>
          <input type="text" id="tecInput">
          <button id="btnAgregar">Agregar</button>
          <button id="btnFinalizar">Finalizar</button>
          <ul id="listaTec"></ul>
        `;

        const listaTec = document.getElementById('listaTec');
        respuestas.tecnologias = [];

        document.getElementById('btnAgregar').addEventListener('click', () => {
          const tec = document.getElementById('tecInput').value.trim();
          if (!tec) return alert('Escribe una tecnología');
          respuestas.tecnologias.push(tec);
          const li = document.createElement('li');
          li.textContent = tec;
          listaTec.appendChild(li);
          document.getElementById('tecInput').value = '';
        });

        document.getElementById('btnFinalizar').addEventListener('click', () => {
          // Mostrar resumen final
          let resumen = `<p>Elegiste el área: ${respuestas.area}</p>`;
          resumen += `<p>Aprenderás: ${respuestas.lenguaje}</p>`;
          resumen += `<p>Decidiste: ${respuestas.desarrollo}</p>`;
          if (respuestas.tecnologias.length > 0) {
            respuestas.tecnologias.forEach(t => {
              resumen += `<p>¡Qué interesante! Aprender ${t} será útil.</p>`;
            });
          }
          resumen += `<p>¡Gracias por jugar! Sigue aprendiendo.</p>`;
          contenido.innerHTML = resumen;

          // Ocultar el formulario de pasos
          paso1.style.display = 'none';
          paso2.style.display = 'none';
          paso3.style.display = 'none';
          paso4.style.display = 'none';
        });
      });
    });
  });
});
*/

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