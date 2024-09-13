export default function relojYAlarma(timer, clockBtn, clockBtnDisable) {
    const d = document;
    const $clockBtn = d.querySelector(clockBtn);
    const $timer = d.querySelector(".timer");
    let clockId = "";

    d.addEventListener("click", e => {
        if(e.target.matches(clockBtn)) {
            clockId = iniciarReloj(clockId, $timer);
            $clockBtn.setAttribute("disabled","");
        }
        if(e.target.matches(clockBtnDisable)) {
            $timer.textContent = "";
            $clockBtn.removeAttribute("disabled");
            clearInterval(clockId);
            clockId = null;
        }
    });
}

function iniciarReloj (clockId, timer) {
    clockId = setInterval(() => {
        let timeNow = new Date(Date.now());
        let fullTime = `${timeNow.getHours()}:${timeNow.getMinutes()}:${timeNow.getSeconds()}`;
        timer.textContent = fullTime;
    }, 1000);
    return clockId;
}
