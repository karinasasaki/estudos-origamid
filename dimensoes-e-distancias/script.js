// Verifique a distância da primeira imagem
// em relação ao topo da página
const primeiraImagem = document.querySelector('img');

console.log(primeiraImagem.offsetTop);

// Retorne a soma da largura de todas as imagens
const imgs = document.querySelectorAll('img');
let larguraTotal = 0;

imgs.forEach(img => {
  larguraTotal += img.offsetWidth;
});
console.log(larguraTotal);

// Verifique se os links da página possuem
// o mínimo recomendado para telas utilizadas
// com o dedo. (48px/48px de acordo com o google)
const links = document.querySelectorAll('a');

links.forEach(link => {
  console.log(link.offsetHeight >= 48 && link.offsetWidth >= 48
    ? 'Possui acessibilidade'
    : 'Não possui acessibilidade'
  );
});

// Se o browser for menor que 720px,
// adicione a classe menu-mobile ao menu
const smallScreen = window.matchMedia('(max-width: 720px').matches; //media-query retorna booleano

if(smallScreen) {
  const menu = document.querySelector('.menu');

  menu.classList.add('menu-mobile');
}