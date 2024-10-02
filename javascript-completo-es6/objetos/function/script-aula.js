const perimetro = new Function("lado", "return lado * 4"); //Não é recomentado criar uma função dessa forma

//Propriedades (length, name)
function somar(n1, n2) {
 return n1 + n2;
}

//console.log(somar.length); //Retorna a quantidade de parâmetros
//console.log(somar.name); //Retorna o nome da função

//Métodos (call, apply, bind)
function descricaoCarro(velocidade) {
  console.log(this);
  console.log(this.marca + " " + this.ano + " " + velocidade);
}

const carro = {
  marca: "Fiat",
  ano: 2015,
  acelerar: function(aceleracao, tempo) {
    return `${this.marca} acelerou ${aceleracao} em ${tempo}`;
  }
}

//descricaoCarro.call(carro, 100); //O "this" faz referência ao primeiro argumento (carro)

const carros = ["Ford", "Fiat", "BMW"];
const frutas = ["Banana", "uva", "Pêra"];

carros.forEach.call(frutas, (item) => { //O "this" faz referência a frutas
  //console.log(item);
})

function Dom(seletor) {
  this.element = document.querySelector(seletor);
}

Dom.prototype.ativo = function(classe) {
  this.element.classList.add(classe);
}

const ul = new Dom("ul");
const li = {
  element: document.querySelector("li")
}

ul.ativo.call(li, "ativo"); //li deve ser parecido com ul
//console.log(ul);
//console.log(li);

//Mais comumente usado:
const section = {
  element: document.querySelector("section")
}
Dom.prototype.ativo.call(section, "ativo");

Array.prototype.mostrarThis = function() {
  console.log(this);
}

const arrayLike = {
  0: "Item 1",
  1: "Item 2",
  2: "Item 3",
  length: 3
}

const liElement = document.querySelectorAll("li"); //É uma nodeList/ArrayLike
const filtro = Array.prototype.filter.call(liElement, (item) => {
  return item.classList.contains("ativo");
})
//console.log(filtro);

const numeros = [22, 3, 76, 400, 87, 8, 32];
//console.log(Math.max(numeros)); //Retorna NaN porque tem que passar todos os números como argumento, não aceita array como argumento
//console.log(Math.max.apply(null, numeros));

const exemploBind = Array.prototype.filter.bind(liElement, (item) => {
  return item.classList.contains("ativo");
})
//console.log(exemploBind); //Não é ativo
//console.log(exemploBind()); //Tem que ativar

const honda = {
  marca: "Honda"
}

const acelerarHonda = carro.acelerar.bind(honda); //this faz referência a honda
//console.log(acelerarHonda);
//console.log(acelerarHonda(300, 20));
//console.log(carro.acelerar(300, 20));

//Para argumentos comuns
function imc(altura, peso) {
  return peso / (altura * altura);
}

const imc180 = imc.bind(null, 1.80); //Caso fictício em que altura é sempre 180

//console.log(imc(1.80, 70));
//console.log(imc180(70));