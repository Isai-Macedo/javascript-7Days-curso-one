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
