const listaAnimais = document.querySelector('.animais-lista');
//console.log(listaAnimais.clientHeight); //height + padding
//console.log(listaAnimais.clientWidth); //width + padding
//console.log(listaAnimais.offsetHeight); //height + padding + border
//console.log(listaAnimais.scrollHeight); //height + padding + scroll

//console.log(listaAnimais.offsetTop); //distância entre o elemento e o topo da página
//console.log(listaAnimais.offsetLeft); //distância entre o elemento e o lado esquerdo da página

const primeiroH2 = document.querySelector('h2');
const rect = primeiroH2.getBoundingClientRect(); //cria objeto com height, width, top, bottom, left, right, posição x e y do elemento
//console.log(rect);

console.log(
  window.innerWidth, //tamanho da largura da tela sem console
  window.outerWidth, //tamanho da largura da tela total
  window.innerHeight, //tamanho da altura da tela sem console
  window.outerHeight, //tamanho da altura da tela total
  window.scrollY, //distância do scroll vertical
  window.scrollX, //distância do scroll horizontal
);

if(window.innerWidth < 600) { //verifica se a tela é maior ou menor que 600px. Não é a forma mais adequada
  console.log('Tela menor que 600px');
} else {
  console.log('Tela maior que 600px');
}

const smallScreen = window.matchMedia('(max-width: 600px').matches; //media-query retorna booleano
console.log(smallScreen);
if(smallScreen) {
  console.log('Usuário mobile');
} else {
  console.log('Usuário desktop');
}