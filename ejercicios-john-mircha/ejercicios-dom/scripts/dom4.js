const d = document;
let counterId = "";

export default function cuentaRegresiva(section) {
    const $section = d.getElementById(section),
    $counterPlace = d.createElement("p");
    $counterPlace.setAttribute("id", "counter-place");
    $counterPlace.style.color = "red";
    $counterPlace.style.fontSize = "2rem";
    $section.insertAdjacentElement("beforeend", $counterPlace);
    counterTemp($counterPlace);
}

function counterTemp(counterPlace) {
    let fechaFin = Date.now()+(1000*60*60*24*600),
    restante = 0;
    counterId = setInterval(() => {
        restante = new Date(fechaFin-Date.now());
        //PARA CALCULAR EL TIEMPO RESTANTE, DE HACERLO CON LOS METODOS GET.HOURS, GET.SECONDS... SE CONTARÍA DESDE 1970
        if (restante >= 0) counterPlace.innerHTML = `Quedan<br/>${Math.floor(restante/1000/60/60/24/365)} años, ${Math.floor((restante/1000/60/60/24) % 365)} días, ${(Math.floor(restante/1000/60/60) % 24)} horas, ${Math.floor((restante/1000/60) % 60)} minutos, ${Math.floor((restante/1000) % 60)} segundos`;
        else {
            alert("FELICIDADES, HAS GANADO UN PREMIO!");
            clearInterval(counterId);
        };
    }, 1000);
}