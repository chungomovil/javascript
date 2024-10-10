const d = document,
w = window;

export default function scrollToTop(element) {
    let movePage = (posY, element) => {
        if(posY <= 200) {
            element.classList.replace("normal", "hiden");
        }
        else {
            element.classList.replace("hiden", "normal");
        }
    }

    const $element = d.querySelector(element);
    let posY = w.scrollY;
    movePage(posY, $element);

    d.addEventListener("click", (e) => {
        if(e.target.matches(element) || e.target.matches(`${element} *`)) {
            w.scrollTo(0,0);
            posY = w.scrollY;
        }
    })
    /*Se puede hacer desde el elemento "windows" o desde el elemento "document"*/
    w.addEventListener("scroll", (e) => {
        posY = w.scrollY;
        movePage(posY, $element);
    });
}