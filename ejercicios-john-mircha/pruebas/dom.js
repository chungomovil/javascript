const $listaElementos = document.getElementById("lista");
$listaElementos.style.display = "flex";
$listaElementos.style.flexWrap = "wrap";
//MANIPULAR CLASES CSS
const $imagen = document.querySelector(".elemento");
console.log($imagen);
console.log($imagen.className);
console.log($imagen.classList);
console.log($imagen.classList.contains("rotate-45"));
$imagen.classList.add("rotate-45");
console.log($imagen.classList.contains("rotate-45"));
$imagen.classList.remove("rotate-45");
$imagen.classList.toggle("rotate-45");
$imagen.classList.add("opacity-50", "fontsize-big");
console.log($imagen.classList);
$imagen.classList.replace("rotate-45", "rotate-180");
//DOM TRAVERSING
console.log($listaElementos.children);
console.log($listaElementos.children[2]);
console.log($listaElementos.parentElement);
console.log($listaElementos.firstElementChild);
console.log($listaElementos.lastElementChild);
console.log($listaElementos.previousElementSibling);
console.log($listaElementos.nextElementSibling);
console.log($listaElementos.closest("body")); //El método "closest" devuelve la etiqueta padre especificada más cercana al elemento
console.log($listaElementos.closest("h2")); //En caso de no encontrar una, devolverá "null"
//CREAR ELEMENTOS DINAMICAMENTE
//*Creamos los elementos */
const $elemento = document.createElement("li"),
    $figure = document.createElement("figure"),
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $texto = document.createTextNode("Juego");
//*Creamos el nodo */
$elemento.appendChild($figure);
$figure.appendChild($img);
$figure.appendChild($figcaption);
$figcaption.appendChild($texto);
$listaElementos.appendChild($elemento);
//*Agregamos los atributos y clases */
$elemento.classList.add("elemento");
$img.setAttribute("src", "https://via.assets.so/game.jpg?w=200&h=200");
$img.setAttribute("alt", "juego");

//CREAR FRAGMENTO PARA INSERTAR CODIGO EFICIENTEMENTE AL DOM
/*Descripcion: el fragmento guarda en memoria el bloque de codigo a insertar para hacerlo solo cuando se le pida, en lugar de estar insertando codigo en cada iteracion
Se puede prescindir de ellos pero si tenemos grandes cantidades de datos a insertar, es mejor recurrir a los fragmentos*/
const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const $fragmento1 = document.createDocumentFragment();
/*Recorremos el array y lo guardamos en el fragmento */
meses.forEach((el) => {
    const $li = document.createElement("li");
    $li.textContent = el;
    $fragmento1.appendChild($li);
});
/*Creamos el elemento padre e ingresamos el fragmento*/
document.write("<h3>MESES DEL AÑO</h3>");
const $ul1 = document.createElement("ul");
$ul1.appendChild($fragmento1);
document.body.appendChild($ul1);

//CREAR ELEMENTOS EN EL DOM A PARTIR DE "TEMPLATES"

const $template = document.getElementById("template").content,
    $fragmento2 = document.createDocumentFragment(),
    cardContent = [
    {
        title: "Template 1",
        img: "https://via.assets.so/album.jpg?w=200&h=200"
    },
    {
        title: "Template 2",
        img: "https://via.assets.so/game.jpg?w=200&h=200"
    },
    {
        title: "Template 3",
        img: "https://via.assets.so/movie.jpg?w=200&h=200"
    },
    {
        title: "Template 4",
        img: "https://via.assets.so/shoe.jpg?w=200&h=200"
    },
    {
        title: "Template 5",
        img: "https://via.assets.so/furniture.jpg?w=200&h=200"
    }
];

cardContent.forEach(el => {
    //Capturamos y modificamos los elementos del nodo en "template"
    $template.querySelector("img").setAttribute("src", el.img);
    $template.querySelector("figcaption").textContent = el.title;
    /*Importamos una copia del nodo "template" para que no se itere sobre el mismo nodo
    NO CONFUNDIR CON "cloneNode", éste último clona el nodo al completo en lugar de hacer una copia en un nuevo "document"*/
    let $clone = document.importNode($template, true); //El argumento "true" copia todo el contenido del interior del nodo, si es false solo copiaria la etiqueta padre
    $fragmento2.appendChild($clone);
});

$listaElementos.appendChild($fragmento2);

//MODIFICAR ELEMENTOS DEL DOM (metodos modernos)

/* 
.insertAdjacent...
    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)

posiciones:
    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)

NOTA: CADA UNO DE LOS TRES METODOS SUPERIORES SE PUEDE COMBINAR CON LAS CUATRO POSICIONES DE DEBAJO
*/
let $contentCard= `<p style="background-color: yellow; color: black;">Juegos de diversas categorias</p>`;
const $nuevaCard = document.importNode($elemento, true);
$listaElementos.insertAdjacentElement("afterbegin", $nuevaCard);
$nuevaCard.insertAdjacentHTML("beforeend", $contentCard);
$nuevaCard.querySelector("figcaption").insertAdjacentText("beforeend", " (GRATIS)");

//MANEJADORES DE EVENTOS

const $darClick = document.getElementById("agregar-click");
$darClick.addEventListener("click", (e) => console.log(e.target)); //Muestra el elemento que causó el evento
$darClick.addEventListener("click", (e) => console.log(e.type)); //Muestra el tipo de evento (un "click" en este caso)

//Podemos hacer que una función sea el "Event Handler" o "Manejador de Eventos"
const cambiaColor = () => {
 let colores = ["blue", "red", "black", "yellow"];
 let pos = Math.round(Math.random()*3);
 $darClick.style.backgroundColor = colores[pos];
}

$darClick.addEventListener("click", cambiaColor); //Le pasamos el Event Handler

//ELIMINAR EVENTOS

const $eliminarEvento = document.getElementById("eliminar-dblclick");
//Debemos hacerlo con una funcion que actue como Event Handler ya que necesita dos parametros (la accion a eliminar y el desencadenante)
const eliminarClick = (e) => {
    $eliminarEvento.removeEventListener("dblclick", eliminarClick);
    console.log(`Se ha eliminado el evento ${e.type}`);
}

$eliminarEvento.addEventListener("dblclick", eliminarClick);


//EVENTOS CON PARAMETROS

const $eventoParametros = document.getElementById("evento-parametros");

//Creamos la funcion a la que se le pasaran los parametros
function saludar(nombre="Paco") {
    alert(`Hola ${nombre}`);
}

//Creamos una funcion anonima que hará de Event Handler y así engañar al DOM (ya que las funciones Handler no pueden llevar parametros)
$eventoParametros.addEventListener("click", () => {
    saludar();
    saludar("Manuel");
    saludar("Aristocratico");
})

//FLUJO DE EVENTOS
/*El flujo de eventos es la capacidad de propagración de un evento a través del DOM y su jerarquía*/

function flujoEventos(e) {
    console.log(`Hola desde ${this.className}, el evento lo originó ${e.target.className}`);
}

const $divs = document.querySelectorAll(".eventos-flujo div");
$divs.forEach(div => {
    div.addEventListener("click", flujoEventos, true); //Si ponemos este tercer parámetro en "true" activamos el modo CAPTURE (desde el elemento padre al hijo) que es inverso al modo BUBBLE (desde el elemento hijo al padre), si lo dejamos en false o lo omitimos adoptaremos el modo BUBBLE
});
