/*ESTA FORMA ES SIN DELEGACION DE EVENTO (NO ES UNA BUENA PRACTICA)
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
*/

export default function hamburguerMenu (panelBtn, nav, navLink) {
    const d = document;
    const $panelBtn = d.querySelector(panelBtn);
    const $nav = d.getElementById(nav);
    
    d.addEventListener("click", e => {
        if(e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) { /*Con la variable seguira del "*" seleccionamos todas las etiquetas hijas */
            $panelBtn.classList.toggle("is-active");
            ($nav.classList.contains("hiden"))
            ? $nav.classList.replace("hiden", "normal")
            : $nav.classList.replace("normal", "hiden"); 
        }

        if(e.target.matches(navLink)) {
            $nav.classList.replace("normal", "hiden");
            $panelBtn.classList.toggle("is-active");
        }
    })

} 

