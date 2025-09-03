document.addEventListener('DOMContentLoaded', function () {
  const contenido = document.getElementById('contenido');

  // Navegación (menu + anterior + siguiente reto)
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <a href="../index.html">Volver al Menú</a>
    <a href="../reto-5/reto-5.html">Anterior (Reto 5)</a>
    <a href="../reto-7/reto-7.html">Siguiente (Reto 7)</a>
  `;
});
