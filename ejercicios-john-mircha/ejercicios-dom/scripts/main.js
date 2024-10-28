import hamburguerMenu from "./dom1.js";
import relojYAlarma from "./dom2.js";
import {controlsBall, shortcut} from "./dom3.js";
import cuentaRegresiva from "./dom4.js";
import scrollToTop from "./dom5.js";
import themeMode from "./dom6.js";
import loadSites from "./dom7.js";


window.addEventListener("DOMContentLoaded", e => {
    hamburguerMenu(".hamburger", "navegacion", ".nav-item a");
    relojYAlarma(".timer", ".clock-btn", ".clock-btn-disable", ".alarm-btn", ".alarm-btn-disable");
    controlsBall(".ball-area","ball");
    shortcut();
    cuentaRegresiva("seccion3", "2026-10-01T13:25:30", "¡FELICIDADES, HAS GANADO UN PREMIO!");
    scrollToTop(".toTop");
    themeMode(".theme-mode", "dark");
    loadSites(".sites", [{"url": "https://www.youtube.com/embed/videoseries?si=pxaefukudoFv7lJl&amp;list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA", "title": "Curso de JavaScript en Youtube"}, {"url": "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5249.982882050684!2d2.291906376755984!3d48.85837360070732!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTorre%20Eiffel!5e0!3m2!1ses!2ses!4v1730107112029!5m2!1ses!2ses", "alt": "https://maps.app.goo.gl/kouQ3WZoJLqisxzN9", "title": "Ubicación", }]);
});
