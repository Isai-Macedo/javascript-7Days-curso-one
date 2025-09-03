// RETO 2 - Comparación de valores
document.addEventListener('DOMContentLoaded', function () {
  const contenido = document.getElementById('contenido');

  let numeroUn = 1;
  let stringUn = '1';
  let numeroTreinta = 30;
  let stringTreinta = '30';
  let numeroDiez = 10;
  let stringDiez = '10';

  let resultados = '';

  // Comparación numeroUn y stringUn
  if (numeroUn === stringUn) {
    resultados += '<p>numeroUn y stringUn tienen el mismo valor y mismo tipo</p>';
  } else if (numeroUn == stringUn) {
    resultados += '<p>numeroUn y stringUn tienen el mismo valor, pero tipos diferentes</p>';
  } else {
    resultados += '<p>numeroUn y stringUn no tienen el mismo valor</p>';
  }

  // Comparación numeroTreinta y stringTreinta
  if (numeroTreinta === stringTreinta) {
    resultados += '<p>numeroTreinta y stringTreinta tienen el mismo valor y mismo tipo</p>';
  } else if (numeroTreinta == stringTreinta) {
    resultados += '<p>numeroTreinta y stringTreinta tienen el mismo valor, pero tipos diferentes</p>';
  } else {
    resultados += '<p>numeroTreinta y stringTreinta no tienen el mismo valor</p>';
  }

  // Comparación numeroDiez y stringDiez
  if (numeroDiez === stringDiez) {
    resultados += '<p>numeroDiez y stringDiez tienen el mismo valor y mismo tipo</p>';
  } else if (numeroDiez == stringDiez) {
    resultados += '<p>numeroDiez y stringDiez tienen el mismo valor, pero tipos diferentes</p>';
  } else {
    resultados += '<p>numeroDiez y stringDiez no tienen el mismo valor</p>';
  }

  // Mostrar resultados en pantalla
  contenido.innerHTML = resultados;

  // Navegación (menu + anterior + siguiente reto)
  const nav = document.querySelector('nav');
  nav.innerHTML = `
 <a href="../index.html">Volver al Menú</a>
    <a href="../reto-2/reto-2.html">Ir al Reto 2</a>
  `;
});
