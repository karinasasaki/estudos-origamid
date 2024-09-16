const carros = ["Ford", "Fiat", "Honda"];

/* carros.forEach((item, index, array) => {
  console.log(item, index, array);
  array[index] = "Teste";
})

console.log(carros); */

const li = document.querySelectorAll("li");

/* li.forEach(i => i.classList.add("ativa")); //Arrow function

const retornoForEach = li.forEach(function(item) { //Outra forma de escrever a mesma coisa
  item.classList.add("ativa");
})

console.log(retornoForEach); //Sempre retorna undefined, o que importa é a lógica por dentro da forEach */

/* const retornoMap = carros.map((item, index, array) => {
  console.log(item, index, array);
  return item.toUpperCase();
})

console.log(retornoMap); //Nova array de carros
console.log(carros); */

const aulas = [
  {
    nome: "HTML",
    min: 15
  },
  {
    nome: "CSS",
    min: 10
  },
  {
    nome: "JavaScript",
    min: 25
  }
]

const tempoAulas = aulas.map(aula => aula.min);
/* console.log(tempoAulas);

function getNomeAulas(aula) {
  return aula.nome;
}

const nomeAulas = aulas.map(getNomeAulas);
console.log(nomeAulas); */

/* const reduceAulas = tempoAulas.reduce((acumulador, item, index, array) => {
 console.log(acumulador, item, index, array);
 return acumulador + item;
}, 0) //Zero é o valor inicial do acumulador 

console.log(reduceAulas);

const reduceAulas2 = tempoAulas.reduce((acumulador, item, index, array) => {
  console.log(acumulador, item, index, array);
  return acumulador + item;
}) //Se não passar um valor, o valor do acumulador será o primeiro valor da array
 
console.log(reduceAulas2); //O valor retornado é o mesmo, com ou sem o valor do acumulador */

const numeros = [4, 56, 32, 78, 41, 7];

const maiorNumero = numeros.reduce((anterior, atual) => {
  return anterior > atual ? anterior : atual;
})

//console.log(maiorNumero);

const listAulas = aulas.reduce((acumulador, aula, index) => {
  acumulador[index] = aula.nome;
  return acumulador;
}, {})

const frutas = ["Banana", "Pêra", "Uva"];

const frutasRight = frutas.reduceRight((acc, fruta) => acc+ " " + fruta); //Começa da direita para esquerda
const frutasLeft = frutas.reduce((acc, fruta) => acc + " " + fruta);

/* console.log(frutasRight);
console.log(frutasLeft); */

const temUva = frutas.some((fruta) => {
  return fruta === "Uva"; //Um true
})

//console.log(temUva); //Retorna true se pelo menos alguma vez o valor retornado é true

const apenasTemUva = frutas.every((fruta) => {
  return fruta === "Uva"; //Um true
})

//console.log(apenasTemUva); //Retorna true se todos os valores retornados são true
//Retorna false se pelo menos um valor retornado é false

const maiorQue3 = numeros.every((numero) => {
  return numero > 3; //Todos true
})

//console.log(maiorQue3); //Retorna true

const indexUva = frutas.findIndex((fruta) => {
  return fruta === "Uva";
})

const findUva = frutas.find((fruta) => {
  return fruta === "Uva";
})

console.log(indexUva); //Retorna o primeiro index de quando o valor retornado é true
console.log(findUva); //Retorna o primeiro valor da array quando o valor retornado é true

const maiorQue32 = numeros.filter(x => x > 32);
console.log(maiorQue32); //Retorna todos os valores da array quando o valor retornado é true