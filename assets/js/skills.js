
let fer = 1;

function cardActive() {
    const boxEl = document.querySelector(`.card-fer${fer}`);

    boxEl.classList.add('drop-active');

    fer += 1;
}

let cardFerActive = {
    opacity: 1,
    desktop: false,
    mobile: true,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 90,
        left: 0,
    },
    afterReveal: cardActive,
}

window.sr = ScrollReveal();
sr.reveal('.card-fer1', cardFerActive);
sr.reveal('.card-fer2', cardFerActive);
sr.reveal('.card-fer3', cardFerActive);
sr.reveal('.card-fer4', cardFerActive);
