const d = document,
w = window;

export default function loadSites(label, [...args]) {
    const $label = d.querySelector(label);
    changeView($label, w.outerWidth, args);
    w.addEventListener("resize", (e) => {
        changeView(label, w.outerWidth, args);
    });
}
/*LA URL DE GOOGLE ES DIFERENTE CUANDO SE USA IFRAME A CUANDO SE USA URL,
USAR LOS METODOS MEDIA (VER VIDEO DE JHON)*/
function changeView(label, width, [...args]) {
    const $fragment = d.createDocumentFragment();
    if(width<=800) {
        for(let item of args) {
            console.log(item);
            const $url = document.createElement("a");
            $url.setAttribute("href", item.url);
            $url.setAttribute("title", item.title);
            $url.setAttribute("data-dark","");
            $url.setAttribute("target", "_blank");
            $url.innerHTML = item.title;
            $fragment.appendChild($url);
        }
    }
    else {
        for(let item of args) {
            const $iframe = document.createElement("iframe");
            $iframe.setAttribute("src", item.url);
            $iframe.setAttribute("title", item.title);
            $iframe.setAttribute("width", "700");
            $iframe.setAttribute("height", "400");
            $iframe.setAttribute("frameborder", "0");
            $fragment.appendChild($iframe);
        }
    }
    label.appendChild($fragment);
    
}
