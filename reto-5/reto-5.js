document.addEventListener('DOMContentLoaded', function () {
  const contenido = document.getElementById('contenido');

  // Navegación (menu + anterior + siguiente reto)
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <a href="../index.html">Volver al Menú</a>
    <a href="../reto-4/reto-4.html">Anterior (Reto 4)</a>
    <a href="../reto-6/reto-6.html">Siguiente (Reto 6)</a>
  `;
});
