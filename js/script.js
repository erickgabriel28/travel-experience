const botaoCriar = document.getElementById("botaoCriar");
const botaoApagar = Document.getElementById("botaotApagar");
const retorno = document.getElementById("retorno");

botaoCriar.addEventListener("click", () => {
    retorno.textContent = "Hoje é um otimo dia para aprender JS!";
});

botaoApagar.addEventListener("click", () => {
    retorno.textContent = "";
});