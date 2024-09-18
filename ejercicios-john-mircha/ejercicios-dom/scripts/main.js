import hamburguerMenu from "./dom1.js";
import relojYAlarma from "./dom2.js";

window.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".hamburger", "navegacion", ".nav-item a");
    relojYAlarma(".timer", ".clock-btn", ".clock-btn-disable", ".alarm-btn", ".alarm-btn-disable");
});
