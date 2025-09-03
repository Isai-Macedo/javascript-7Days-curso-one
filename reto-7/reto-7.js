document.addEventListener('DOMContentLoaded', function () {
  const contenido = document.getElementById('contenido');

  // Navegación (menu + anterior + siguiente reto)
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <a href="../reto-6/reto-6.html">Anterior (Reto 6)</a>
    <a href="../index.html">Volver al Menú</a>
  `;
});
