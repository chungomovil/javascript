export default function relojYAlarma(timer, clockBtn, clockBtnDisable, alarmBtn, alarmBtnDisable) {
    const d = document;
    const $timer = d.querySelector(timer);
    let clockId = "";
    let alarmId = "";

    d.addEventListener("click", e => {
        if(e.target.matches(clockBtn)) {
            clockId = iniciarReloj(clockId, $timer);
            e.target.disabled = true;
        }

        if(e.target.matches(clockBtnDisable)) {
            $timer.textContent = "";
            d.querySelector(clockBtn).disabled = false;
            clearInterval(clockId);
            clockId = null;
        }

        if(e.target.matches(alarmBtn)) {
            alarmId = iniciarAlarma();
            e.target.disabled = true;
        }

        if(e.target.matches(alarmBtnDisable)) {
            alarmId.muted = true;
            d.querySelector(alarmBtn).disabled = false;
        }
    });
}

function iniciarReloj(clockId, timer) {
    clockId = setInterval(() => {
        /*let timeNow = new Date().toLocaleTimeString();*/ //Con este metodo es mas facil ya que viene la fecha codificada correctamente.
        let timeNow = new Date(Date.now());
        const timeParts = [timeNow.getHours(), timeNow.getMinutes(), timeNow.getSeconds()];
        const timeParts_mod = timeParts.map((el) => {
            el = el.toString();
            if(el.length < 2){
                el = "0"+el;
            }
           return el;
        });
        let fullTime = `${timeParts_mod[0]}:${timeParts_mod[1]}:${timeParts_mod[2]}`;
        timer.textContent = fullTime;
    }, 1000);
    return clockId;
}

function iniciarAlarma(alarmId) {
    alarmId = new Audio("./assets/clock-alarm.mp3");
    alarmId.play();
    alarmId.loop = true;
    return alarmId;
}
