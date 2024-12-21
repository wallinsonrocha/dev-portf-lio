const nomeElement = document.querySelector("#inicio span");
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);

const nome = urlParams.get('nome');
