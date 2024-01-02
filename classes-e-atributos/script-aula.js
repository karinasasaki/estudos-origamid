//classList e className

const menu = document.querySelector('.menu');
//console.log(menu.classList[0]); //é uma array-like

menu.classList.add('ativo', 'teste');
menu.classList.remove('amarelo');
menu.classList.toggle('amarelo'); //se tiver a classe, remove, se não tiver, adiciona

if(menu.classList.contains('amarelo')) {
  menu.classList.add('possui-amarelo');
} else {
  menu.classList.add('nao-possui-amarelo');
}

//console.log(menu.className); //retorna uma string 
menu.className += ' vermelho' //é possível modificar a propriedade (Writable)

//attributes (Read Only, não é possível modificar a propriedade)

const animais = document.querySelector('.animais');
//console.log(animais.attributes[1]); //é uma array-like
//console.log(animais.attributes.class)

//getAttribute e setAttribute (métodos)

const img = document.querySelector('img');

const srcImg = img.getAttribute('src');
//console.log(srcImg);

img.setAttribute('alt', 'É uma raposa');

const possuiAlt = img.hasAttribute('alt');
//console.log(possuiAlt);

img.removeAttribute('alt');
//console.log(img.getAttribute('alt'));