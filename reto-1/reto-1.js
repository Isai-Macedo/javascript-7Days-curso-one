const contenido = document.getElementById('resultados');

let numeroUno = 1;
let stringUno = '1';
let numeroTreinta = 30;
let stringTreinta = '30';
let numeroDiez = 10;
let stringDiez = '10';
let resultados = '';

document.addEventListener('DOMContentLoaded', function () {
  // Comparación numeroUno y stringUno
  if (numeroUno === stringUno) {
    resultados += '<p><strong>numeroUno</strong> y <strong>stringUno</strong> tienen el mismo valor y mismo tipo.</p>';
  } else if (numeroUno == stringUno) {
    resultados += '<p><strong>numeroUno</strong> y <strong>stringUno</strong> tienen el mismo valor, pero tipos diferentes.</p>';
  } else {
    resultados += '<p><strong>numeroUno</strong> y <strong>stringUno</strong> no tienen el mismo valor.</p>';
  }

  // Comparación numeroTreinta y stringTreinta
  if (numeroTreinta === stringTreinta) {
    resultados += '<p><strong>numeroTreinta</strong> y <strong>stringTreinta</strong> tienen el mismo valor y mismo tipo.</p>';
  } else if (numeroTreinta == stringTreinta) {
    resultados += '<p><strong>numeroTreinta</strong> y <strong>stringTreinta</strong> tienen el mismo valor, pero tipos diferentes.</p>';
  } else {
    resultados += '<p><strong>numeroTreinta</strong> y <strong>stringTreinta</strong> no tienen el mismo valor.</p>';
  }

  // Comparación numeroDiez y stringDiez
  if (numeroDiez === stringDiez) {
    resultados += '<p><strong>numeroDiez</strong> y <strong>stringDiez</strong> tienen el mismo valor y mismo tipo.</p>';
  } else if (numeroDiez == stringDiez) {
    resultados += '<p><strong>numeroDiez</strong> y <strong>stringDiez</strong> tienen el mismo valor, pero tipos diferentes.</p>';
  } else {
    resultados += '<p><strong>numeroDiez</strong> y <strong>stringDiez</strong> no tienen el mismo valor.</p>';
  }

  // Mostrar resultados en pantalla
  contenido.innerHTML = resultados;
});
