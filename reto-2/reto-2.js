document.addEventListener('DOMContentLoaded', function () {
  const boton = document.getElementById('btnEnviar'); // Botón para mostrar el mensaje

  boton.addEventListener('click', function () {
    const nombre = document.getElementById('nombre').value;
    const edad = document.getElementById('edad').value;
    const lenguaje = document.getElementById('lenguaje').value;

    const mensaje = `Hola ${nombre}, tienes ${edad} años y ya estás aprendiendo ${lenguaje}!`;
    document.getElementById('resultado').textContent = mensaje;

    // Ejercicio opcional
    setTimeout(() => {
      const respuesta = prompt(`¿Te gusta estudiar ${lenguaje}? Responde con 1 para SÍ o 2 para NO.`);
      if (respuesta == 1) {
        document.getElementById('resultadoAlert').textContent =
          ' 😃 ¡Muy bien! Sigue estudiando y tendrás mucho éxito.';
      } else if (respuesta == 2) {
        document.getElementById('resultadoAlert').textContent =
          ' 😕 Oh, qué pena... ¿Ya intentaste aprender otros lenguajes?';
      }
    }, 500);
  });

  // Navegación (menú + anterior + siguiente reto)
  const nav = document.querySelector('nav');
  nav.innerHTML = `
    <a href="../index.html">Volver al Menú</a>
    <a href="../reto-1/reto-1.html">Anterior (Reto 1)</a>
    <a href="../reto-3/reto-3.html">Siguiente (Reto 3)</a>
  `;
});
