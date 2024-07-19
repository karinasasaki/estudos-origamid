var pessoa = {
  nome: "Karina",
  idade: 23
}

var quadrado = {
  lados: 4,
  area: function(lado) {
    return lado * lado;
  },
  perimetro(lado) {
    return this.lados * lado;
  }
}

console.log(Math.PI);
console.log(Math.random());