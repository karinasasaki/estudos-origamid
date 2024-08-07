//Array

/* const dados = [new String("Tipo 1"), ["Carro", "Moto", {cor: "Azul", preco: 40000}], function andar(nome) {console.log(nome + " andou.")}];
console.log(dados[0]);
console.log(dados[1]);
console.log(dados[1][2]);
console.log(dados[1][2].cor);
console.log(dados[2]);
dados[2]("Karina"); */

//construtor
const instrumentos = ["Guitarra", "Baixo", "Violão"];
const carros = new Array("Corola", "Jeep", "Honda");
const numeros = Array.of(5, 2, 1, 8);
const pares = Array(2, 4, 6);

console.log(carros);
carros[2] = "Ford";
carros[3] = "Kia";
carros[5] = "Fusca";
console.log(carros);

console.log(numeros)
console.log(pares);

//console.log(instrumentos.length);

const li = document.querySelectorAll("li");
const arrayLi = Array.from(li);

/* console.log(li);
console.log(arrayLi);
console.log(Array.isArray(li));
console.log(Array.isArray(arrayLi)); */

/* console.log(instrumentos.sort());
console.log(numeros.sort()); */

/* numeros.unshift(3);
console.log(numeros);
numeros.push(7);
console.log(numeros);

numeros.shift(3);
console.log(numeros);
numeros.pop(7);
console.log(numeros);
numeros.reverse(7);
console.log(numeros); */

/* console.log(carros);
carros.splice(1, 0, "Kia", "Mustang"); //Adiciona na Kia e Mustang a partir do index 1
console.log(carros);
console.log(carros.splice(0, 1, "Brasília")); //Retorna os itens removidos, a partir do index 0, 1 item removido
console.log(carros); */

const itens = ["Item 0", "Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];

/* console.log(itens.copyWithin(-1));
console.log(itens.copyWithin(3, 0, 3));

console.log(itens.fill("Banana", 1, 4)); */

const transporte1 = ["Barco", "Moto"];
const transporte2 = ["Carro", "Avião"];
const transportes = transporte1.concat(transporte2);
console.log(transportes);
const maisTransportes = [].concat(transportes, "Van", "Carro");
console.log(maisTransportes);

console.log(maisTransportes.includes("Carro"));
console.log(maisTransportes.indexOf("Carro"));
console.log(maisTransportes.lastIndexOf("Carro"));

console.log(transportes.join());
console.log(transportes.join(" - "));
console.log(transportes.join(""));

console.log(transportes.slice(1, 3));
const cloneTransportes = transportes.slice();
console.log(cloneTransportes);