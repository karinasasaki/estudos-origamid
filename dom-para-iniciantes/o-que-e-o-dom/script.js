const h1selecionado = document.querySelector("h1");
const h1Class  = h1selecionado.classList;

h1selecionado.addEventListener("click", function() {
  console.log("Clicou em", h1selecionado.innerText);
})