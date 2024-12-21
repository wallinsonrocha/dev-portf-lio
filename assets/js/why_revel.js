
let elementContext = 1;

function revealContent() {
    const facts = document.querySelector(`.why-reveal${elementContext}`);

    facts.classList.add('why-text-reveal');

    elementContext += 1;
}

function revealContentDesk() {
    const facts = document.querySelector(`.why-reveal${elementContext}-desk`);

    facts.classList.add('why-text-reveal-desk');

    elementContext += 1;
}

let revealText = {
    opacity: 0,
    distance: '50px',
    desktop: false,
    mobile: true,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 80,
        left: 0,
    },
    afterReveal: revealContent,
}

let revealTextDesk = {
    opacity: 0,
    distance: '50px',
    desktop: true,
    mobile: false,
    viewOffset: {
        top: 0,
        right: 0,
        bottom: 200,
        left: 0,
    },
    afterReveal: revealContentDesk,
}

window.sr = ScrollReveal();
sr.reveal('.why-reveal1', revealText);
sr.reveal('.why-reveal2', revealText);
sr.reveal('.why-reveal3', revealText);

window.sr = ScrollReveal();
sr.reveal('.why-reveal1-desk', revealTextDesk);
sr.reveal('.why-reveal2-desk', revealTextDesk);
sr.reveal('.why-reveal3-desk', revealTextDesk);
