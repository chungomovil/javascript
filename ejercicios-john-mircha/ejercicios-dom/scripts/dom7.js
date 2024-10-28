const d = document,
w = window,
mobileScreen = w.matchMedia("(max-width: 800px)");

export default function loadSites(label, [...args]) {
    const $label = d.querySelector(label);
    changeView($label, args);
    mobileScreen.addEventListener("change", (e) => {
        changeView($label, args);
    });
}

function changeView(label, [...args]) {
    const $fragment = d.createDocumentFragment();
    if(mobileScreen.matches) {
        for(let item of args) {
            const $url = document.createElement("a");
            //Para la url de google, que es diferente en iframe a en href
            (!item.alt) ? $url.setAttribute("href", item.url) : $url.setAttribute("href", item.alt);
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
    label.replaceChildren($fragment);
}
