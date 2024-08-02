//Number
//Construtor de números

const ano = 2024;
const janeiro = new Number(1);

/* console.log(Number.isNaN(ano));
console.log(Number.isNaN("ano"));
console.log(Number.isNaN(NaN));

console.log(Number.isInteger(ano));
console.log(Number.isInteger(1.1)); */

/* console.log(parseFloat("12.34"));
console.log(parseFloat("     12.34"));
console.log(parseFloat("100 reais"));
console.log(parseFloat("R$100"));

console.log(parseInt("12.34")); */

const preco = 2.99;
const litros = 1.456;

/* console.log(preco.toFixed());
console.log(litros.toFixed(2));

console.log(litros.toString());

console.log(preco.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));
console.log(preco.toLocaleString("en-US", {style: "currency", currency: "USD"})); */

//Math
//Objeto nativo que possui propriedades e métodos de expressões matemáticas

console.log(Math.PI);
console.log(Math.E);

console.log(Math.abs(-5));

console.log(Math.ceil(7.1)); //Arredonda para cima
console.log(Math.floor(7.9)); //Arredonda para baixo
console.log(Math.round(7.1));
console.log(Math.round(7.9));

console.log(Math.min(3, 10, 8, 2, 5));
console.log(Math.max(3, 10, 8, 2, 5));

console.log(Math.random()); //Retorna número aleatório de 0 a 1
console.log(Math.random() * 100); //0 a 100

//Número aleatório entre 1 e 25
const min = 1;
const max = 25;
const numeroSorteado = Math.floor(Math.random() * (max - min + 1) + min);
console.log(numeroSorteado);