const d = document;
/*let counterId = "";*/

export default function cuentaRegresiva(section, limit, message) {
    const $section = d.getElementById(section),
    $counterPlace = d.createElement("p");
    $counterPlace.setAttribute("id", "counter-place");
    $counterPlace.style.color = "red";
    $counterPlace.style.fontSize = "2rem";
    $section.insertAdjacentElement("beforeend", $counterPlace);
    limit = new Date(limit).getTime();

    let counterTemp = setInterval(() => {
        let currentTime = Date.now();
        let timeToEnd = limit - currentTime;
        if(timeToEnd > 0) {
            let anios,
            dias,
            horas,
            minutos,
            segundos
            anios = ("0"+Math.floor(timeToEnd / (1000 * 60 * 60 * 24 * 365))).slice(-2); //PONIENDO EL 0 DELANTE EN FORMATO STRING CONVERTIMOS TODO A STRING, LUEGO CON SLICE(-2) RECORTAMOS LOS DOS ULTIMOS CARACTERES DE LA CADENA, DE ESTA FORMA CUANDO EL DIGITO SEA MENOR A 10 SE MOSTRARÁ CON EL 0 DELANTE
            dias = ("0"+Math.floor(timeToEnd / (1000 * 60 * 60 * 24) % 365)).slice(-3);
            horas = ("0"+Math.floor(timeToEnd / (1000 * 60 * 60) % 24)).slice(-2);
            minutos = ("0"+Math.floor(timeToEnd / (1000 * 60) % 60)).slice(-2);
            segundos = ("0"+Math.floor(timeToEnd / (1000) % 60)).slice(-2);
            $counterPlace.innerHTML = `Faltan<br/>${anios} años : ${dias} días : ${horas} horas : ${minutos} minutos : ${segundos} segundos`;
        }
        else {
            $counterPlace.innerHTML = message;
            clearInterval(counterTemp);
        } 
    }, 1000);
}

/*PRIMER METODO (SIN PASARLE PARAMETROS NI FECHA LIMITE, SE HACE MANUAL EN LA FUNCION) */
/*function counterTemp(counterPlace) {
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
}*/