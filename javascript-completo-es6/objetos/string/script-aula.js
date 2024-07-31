//String

const comida = "Comida";
const agua = new String("Água");

/* console.log(comida);
console.log(agua);

console.log(comida.toUpperCase());
console.log(agua.toUpperCase());

console.log(comida.length);
console.log(agua[1]);
console.log(agua.charAt(1)); */

const frase = "A melhor linguagem é ";
const linguagem = "JavaScript";
const fraseFinal = frase + linguagem;

console.log(fraseFinal);
console.log(frase.concat(linguagem, "!"));

const listaFrutas = "Melancia, Banana, Laranja";

/* console.log(listaFrutas.includes("Banana"));
console.log(listaFrutas.includes("Melancia", 1));

console.log(listaFrutas.startsWith("Me"));
console.log(listaFrutas.endsWith("ja")); */

console.log(listaFrutas.slice(0, 8));
console.log(listaFrutas.slice(-7));
console.log(listaFrutas.slice(0, -9));

console.log(linguagem.substring(0, 4));
console.log(linguagem.substring(4));

console.log(linguagem.indexOf("S"));
console.log(linguagem.indexOf("a"));
console.log(linguagem.lastIndexOf("a"));

/* console.log(linguagem.length);
console.log(linguagem.padStart(20, "a"));
console.log(linguagem.padStart(20).length);
console.log(linguagem.padEnd(20, "a"));
console.log(linguagem.padEnd(20).length); */

const listaPrecos = ["R$ 20", "R$ 100", "R$ 1000"];
/* 
listaPrecos.forEach((preco) => {
  console.log(preco);
})

listaPrecos.forEach((preco) => {
  console.log(preco.padStart(10));
}) */

const banana = "Banana";
const na = "Na";

console.log(banana + na.repeat(3));

const listaRoupas = "Camisas Calças Saias Vestidos";

console.log(listaRoupas.replace("Camisas", "Camisetas"));
console.log(listaRoupas.replace(/[ ]+/g, ", "));

const arrayRoupas = listaRoupas.split(" ");

console.log(arrayRoupas);
console.log(banana.split(""));

console.log(listaPrecos.join(" - "));
console.log(listaPrecos.join(", "));

const valor = "     R$ 25,00   ";

console.log(valor.trim());
console.log(valor.trimStart());
console.log(valor.trimEnd());