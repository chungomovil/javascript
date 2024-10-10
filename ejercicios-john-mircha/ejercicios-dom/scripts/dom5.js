const d = document;

export default function scrollToTop(element) {
    let movePage = (posY, element) => {
        if(posY <= 200) {
            element.style.display = "none";
        }
        else {
            element.style.display = "block";
        }
    }

    const $element = d.querySelector(element);
    let posY = window.scrollY;
    movePage(posY, $element);

    d.addEventListener("click", (e) => {
        if(e.target.matches(element) || e.target.matches(`${element} *`)) {
            window.scrollTo(0,0);
            posY = window.scrollY;
        }
    })

    d.addEventListener("scroll", (e) => {
        posY = window.scrollY;
        movePage(posY, $element);
    });
}