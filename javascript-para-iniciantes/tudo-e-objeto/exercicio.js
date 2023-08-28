// nomeie 3 propriedades ou métodos de strings
var nome = "Karina"
console.log(nome.includes("a")); //includes
console.log(nome.length); // length
console.log(nome.toLowerCase()); //toLowerCase

// nomeie 5 propriedades ou métodos de elementos do DOM
var btn = document.querySelector(".btn");
console.log(btn.classList); //classList
console.log(btn.className); //className
console.log(btn.hasAttribute("required")); //hasAttribute
console.log(btn.closest("a")); //closest
console.log(btn.addEventListener("click", function() {
  console.log("Clicou - exercício")
})); //addEventListener

// busque na web um objeto (método) capaz de interagir com o clipboard, 
// clipboard é a parte do seu computador que lida com o CTRL + C e CTRL + V
function copy() {
  console.log(navigator.clipboard.writeText("Você clicou no link e este texto foi copiado. Ass. Karina Sasaki."));
  alert("Texto copiado! Cole em algum lugar para ver o texto.");
}