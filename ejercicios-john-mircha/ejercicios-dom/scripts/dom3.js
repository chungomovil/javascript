const d = document;

export function controlsBall(ballArea, ball) {
    let activateBall = false;
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