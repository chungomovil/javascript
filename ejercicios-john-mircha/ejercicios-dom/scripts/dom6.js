const d = document;
let mode = localStorage.getItem("mode");

export default function themeMode (button) {
    if(mode === null) mode = localStorage.setItem("mode", "light");
    const $button = d.querySelector(button);
    changeTheme($button, mode)
    d.addEventListener("click", (e) => {
        if(e.target.matches(button) || e.target.matches(`${button} *`)) {
            (mode === "light") ? localStorage.setItem("mode", "dark") : localStorage.setItem("mode", "light");
            mode = localStorage.getItem("mode");
            changeTheme($button, mode);
        }
    })
}


function changeTheme (button, mode) {
    const $buttonChildren = button.children;
    let $emoji;
    for (let child of $buttonChildren) {
        if (child.className === "emoji") $emoji = child;
    }
    //No hacerlo con "REPLACE" por así se agrega la clase al recargar la pagina
    if(mode === "light") {
        $emoji.setAttribute("src", "./assets/moon.png");
        d.body.classList.add("light");
        d.body.classList.remove("dark");
    }
    else if (mode === "dark") {
        $emoji.setAttribute("src", "./assets/sun.png");
        d.body.classList.add("dark");
        d.body.classList.remove("light");
    }

}


