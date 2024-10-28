const d = document;
let mode = localStorage.getItem("mode");

export default function themeMode (button, darkClass) {
    if(mode === null) mode = localStorage.setItem("mode", "light");
    const $button = d.querySelector(button);
    changeTheme($button, darkClass)
    d.addEventListener("click", (e) => {
        if(e.target.matches(button) || e.target.matches(`${button} *`)) {
            (mode === "light") ? localStorage.setItem("mode", "dark") : localStorage.setItem("mode", "light");
            mode = localStorage.getItem("mode");
            changeTheme($button, darkClass);
        }
    });
}

function changeTheme (button, darkClass) {
    const $buttonChildren = button.children,
    //Capturamos todos los elementos que tenga el atributo "data-dark". Se pone entre corchetes porque es la forma en que en css se capturan los atributos
    $darkElements = d.querySelectorAll("[data-dark]");
    let $emoji;
    for (let child of $buttonChildren) {
        if (child.className === "emoji") $emoji = child;
    }
    //No hacerlo con "REPLACE" por así se agrega la clase al recargar la pagina
    if(mode === "light") {
        $emoji.setAttribute("src", "./assets/moon.png");
        $darkElements.forEach((element) => element.classList.remove(darkClass));
    }
    else if (mode === "dark") {
        $emoji.setAttribute("src", "./assets/sun.png");
        $darkElements.forEach((element) => element.classList.add(darkClass));
    }
}


