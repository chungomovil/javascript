import hamburguerMenu from "./dom1.js";
import relojYAlarma from "./dom2.js";
import {controlsBall, shortcut} from "./dom3.js";
import cuentaRegresiva from "./dom4.js";
import scrollToTop from "./dom5.js";
import themeMode from "./dom6.js";


window.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".hamburger", "navegacion", ".nav-item a");
    relojYAlarma(".timer", ".clock-btn", ".clock-btn-disable", ".alarm-btn", ".alarm-btn-disable");
    controlsBall(".ball-area","ball");
    shortcut();
    cuentaRegresiva("seccion3", "2026-10-01T13:25:30", "¡FELICIDADES, HAS GANADO UN PREMIO!");
    scrollToTop(".toTop");
    themeMode(".theme-mode", "dark");
});
