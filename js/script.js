const botão = document.querySelector("#botaoMostrar");
const retorno = document.querySelector("#retorno");

botao.addEventListener("click", function(){

    retorno.textContent = "Voce clicou no botão!";
})