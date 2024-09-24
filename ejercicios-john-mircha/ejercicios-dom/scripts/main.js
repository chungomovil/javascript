import hamburguerMenu from "./dom1.js";
import relojYAlarma from "./dom2.js";
import {controlsBall, shortcut} from "./dom3.js";

window.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".hamburger", "navegacion", ".nav-item a");
    relojYAlarma(".timer", ".clock-btn", ".clock-btn-disable", ".alarm-btn", ".alarm-btn-disable");
    controlsBall(".ball-area","ball");
    shortcut();
});
