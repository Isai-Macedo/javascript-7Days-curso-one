/*
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
*/

let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";

let agregarMas = "sí";  // valor inicial como "sí", porque la primera vez siempre va a entrar en el while
while(agregarMas != "no"){
    agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    while (agregarMas != "sí" && agregarMas != "no") {  //mientras el texto leído sea diferente de "sí" y de "no", mostrar que no fue reconocido y preguntar nuevamente
	alert("¡Operación no reconocida!");
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    }
	
    if (agregarMas === "no"){  //si el texto leído es "no", salir del while
        break;
    }
	
    comida = prompt("¿Qué comida deseas agregar?");
    categoria = prompt("¿En qué categoria encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");
    if(categoria === 'frutas'){
        frutas.push(comida);
    } else if (categoria === 'lacteos'){
        lacteos.push(comida);
    } else if (categoria === 'dulces'){
        dulces.push(comida);
    } else if (categoria === 'congelados'){
        congelados.push(comida);
    } else {
        alert("Esa categoria no está predefinida.")
    }
}
alert("Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}");