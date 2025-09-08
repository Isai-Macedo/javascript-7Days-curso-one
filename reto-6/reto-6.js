/*
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
*/
let frutas = [];
let lacteos = [];
let dulces = [];
let congelados = [];
let comida = "";
let categoria = "";
let eliminar = "";

let agregarMas = "sí";  // valor inicial como "sí", porque la primera vez siempre va a entrar en el while
while(agregarMas != "no"){
    if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    } else {
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí', 'no' o 'eliminar'.");
    }
	
    while (agregarMas != "sí" && agregarMas != "no" && agregarMas != "eliminar") {  //mientras el texto leído sea diferente de "sí", "no" y "eliminar", mostrar que no fue reconocido y preguntar nuevamente
	alert(`¡Operación no reconocida!`);
        agregarMas = prompt("¿Deseas agregar una comida a la lista de compras? Responde 'sí' o 'no'.");
    }
	
    if (agregarMas === "no"){  //si el texto leído es "no", salir del while
	break;
    }
	
    if(agregarMas === "sí"){
        comida = prompt("¿Qué comida deseas agregar?");
        categoria = prompt("¿En qué categoría encaja esta comida: 'frutas', 'lacteos', 'dulces' o 'congelados'?");
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
    } else if(agregarMas === "eliminar"){
	if(frutas.length === 0 && lacteos.length === 0 && dulces.length === 0 && congelados.length === 0){  //si la lista está vacía (tratamiento de bug, en caso de que la persona escriba "eliminar" incluso cuando solo se muestren las opciones "sí" y "no")
		alert(`¡La lista está vacía!`);
	} else {  //si la lista no está vacía
		eliminar = prompt(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}\n\n¿Qué producto deseas eliminar?`);
		if(frutas.indexOf(eliminar) != -1){
			frutas.splice(frutas.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if(lacteos.indexOf(eliminar) != -1){
			lacteos.splice(lacteos.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (dulces.indexOf(eliminar) != -1){
			dulces.splice(dulces.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else if (congelados.indexOf(eliminar) != -1){
			congelados.splice(congelados.indexOf(eliminar), 1);
			alert(`¡El ítem ${eliminar} ha sido eliminado con éxito!`)
		} else {
			alert(`¡No fue posible encontrar el ítem dentro de la lista!`)
		}
	}
    }
}
alert(`Lista de compras:\n  Frutas: ${frutas}\n  Lácteos: ${lacteos}\n  Dulces: ${dulces}\n  Congelados: ${congelados}`);