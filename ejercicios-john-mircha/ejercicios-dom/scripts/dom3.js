const d = document;

export function controlsBall(ballArea, ball) {
    let activateBall = false,
    /*ESTAS DOS VARIABLES SE USAN PARA EL METODO GETBOUNDINGCLIENTRECT */
    x = 0,
    y = 0;
    const $ballArea = d.querySelector(ballArea);
    const $ball = d.getElementById(ball);

    d.addEventListener("click", (e) => {
        if(e.target.matches(ballArea) || e.target.matches(`${ballArea} *`)) {
            activateBall = true;
        }
        else {
            activateBall = false;
        }
    });
    d.addEventListener("keydown", (e) => {
        if(activateBall) {
            let AreaWidth = parseFloat(getComputedStyle($ballArea).width);
            let AreaHeight = parseFloat(getComputedStyle($ballArea).height);
            let posTop = parseFloat(getComputedStyle($ball).top);
            let posLeft = parseFloat(getComputedStyle($ball).left);
            let borderBall = (parseFloat(getComputedStyle($ball).padding) + 1);
            switch(e.code) {
                case "KeyW":
                    posTop = moveBall(0, posTop, borderBall, 1);
                    $ball.style.top = `${posTop}px`;
                    break;
                case "KeyS":
                    posTop = moveBall(AreaHeight, posTop, borderBall, 0);
                    $ball.style.top = `${posTop}px`;
                    break;
                case "KeyA":
                    posLeft = moveBall(0, posLeft, borderBall, 1);
                    $ball.style.left = `${posLeft}px`;
                    break;
                case "KeyD":
                    posLeft = moveBall(AreaWidth, posLeft, borderBall, 0);
                    $ball.style.left = `${posLeft}px`;
                    break;
            }
        }
    });

    /*CON EL METODO "GETBOUNDINGCLIENTRECT" QUE CALCULA A CUANTO ESTÁN LOS ELEMENTOS DE DISTANCIA DE LOS BORDES DEL VIEWPORT*/
    /*d.addEventListener("keydown", (e) => {
        if(activateBall) {
            let ballPos = $ball.getBoundingClientRect(),
            areaPos= $ballArea.getBoundingClientRect();
            switch(e.code) {
                case "KeyW":
                    if(ballPos.top > areaPos.top) y -= 10;
                    break;
                case "KeyS":
                    if(ballPos.bottom < areaPos.bottom) y += 10;
                    break;
                case "KeyA":
                    if(ballPos.left > areaPos.left) x -= 10;
                    break;
                case "KeyD":
                    if(ballPos.right < areaPos.right) x += 10;
                    break;
            }
            $ball.style.transform = `translate(${x}px, ${y}px)`;
        }
    });*/
    
}

function moveBall(limit, pos, borderball, direction) {
    if(direction === 0) {
        if(pos < (limit - 50)) {
            return pos + 10;
        }
        else if(pos < (limit - borderball)) {
            return pos + 1;
        }
    }
    if(direction === 1) {
        if(pos > (limit + 50)) {
            return pos - 10;
        }
        else if(pos > (limit + borderball)) {
            return pos - 1;
        }
    }
}

export function shortcut() {
    d.addEventListener("keydown", (e) => {
        if(e.altKey) { //De esta forma sabemos si la tecla "ALT" estaba presionada cuando se pulsaron las demas
            switch(e.code) {
                case "KeyA":
                    alert("Este es un atajo para mostrar una alerta.");
                    break;
                case "KeyP":
                    prompt("Este es un atajo para mostrar un prompt.");
                    break;
                case "KeyC":
                    confirm("Este es un atajo para crear una confirmacion.");
                    break;
            }
        }
    });
}

