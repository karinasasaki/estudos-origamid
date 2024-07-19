//Operadores aritméticos com strings
var soma = "100" + 50; //concatena
var subtracao = "100" - 50;
var multiplicacao = "100" * "2"
var divisao = "Comprei 10" / 2; //NaN
console.log(soma, subtracao, multiplicacao, divisao);
console.log(isNaN(divisao));