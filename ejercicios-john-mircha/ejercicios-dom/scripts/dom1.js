const $hamburguer = document.querySelector(".hamburger");
const $nav = document.getElementById("navegacion");

function alternarNav(e) {
    $hamburguer.classList.toggle("is-active");
    ($nav.classList.contains("hiden"))
    ? $nav.classList.replace("hiden", "normal")
    : $nav.classList.replace("normal", "hiden");
}

$hamburguer.addEventListener("click", alternarNav);
//No es necesario poner "children[0]", pero de este modo nos aseguramos que solo se desencadene cuando se de click al "ul"
$nav.children[0].addEventListener("click", alternarNav);

