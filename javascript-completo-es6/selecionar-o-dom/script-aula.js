//getElementById
const animais  = document.getElementById('animais');
//console.log(animais); //imprime elemento que contém id animais
//console.log(animais.innerText);

//getElementByClassName
const gridSection = document.getElementsByClassName('grid-section');
//console.log(gridSection); //imprime lista de elementos com a classe grid-section
//console.log(gridSection[1]);

//getElementByTagName
const ul = document.getElementsByTagName('ul');
//console.log(ul); //imprime lista de tags ul

//querySelector
const primeiroUl = document.querySelector('ul');
//console.log(primeiroUl); //imprime o primeiro elemento ul

const listaAnimais = document.querySelector('.animais-lista');  //seletor de css
//console.log(listaAnimais);

//querySelectorAll
const animaisImg = document.querySelectorAll('.animais img');
//console.log(animaisImg); //retorna lista (NodeList) de todos os elementos com a classe animais e tag img

const gridSectionHTMLCollection = document.getElementsByClassName('grid-section'); //é uma array-like, não tem o método forEach
const gridSectionNodeList = document.querySelectorAll('.grid-section');

primeiroUl.classList.add('grid-section');

console.log(gridSectionHTMLCollection);
console.log(gridSectionNodeList); //o tamanho da NodeList não atualiza ao adicionar mais um elemento com a classe, é estático

gridSectionNodeList.forEach(function(item, index) {
  console.log(index, item);
})

const arrayGrid = Array.from(gridSectionHTMLCollection); //transforma array-like em array
console.log(arrayGrid); //também é estático

arrayGrid.forEach(function(item, index) {
  console.log(index, item);
})