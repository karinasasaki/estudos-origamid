function areaQuadrado(lado) {
  return lado * lado;
}

function pi() {
  return 3.14;
}

function calculoIMC(peso, altura) {
  var imc = peso / (altura ** 2);
  return imc;
}

console.log(calculoIMC(66, 1.60));

addEventListener("click", function() {
  console.log("Clicou");
});

addEventListener("click", () => {console.log("Oi")}); //função anônima

function faltaVisitar(paisesVisitados) {
  var totalPaises = 193;
  return `Faltam visitar ${totalPaises - paisesVisitados} países.`
}