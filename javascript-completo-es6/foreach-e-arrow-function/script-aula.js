const imgs = document.querySelectorAll('img');

imgs.forEach(function(item, index, array) { //o primeiro parâmetro do forEach é uma callback (função anônima)
//  console.log(item);
//  console.log(index);
//  console.log(array);
})

const titulos = document.getElementsByClassName('titulo'); //arraylike
const titulosArray = Array.from(titulos); //transforma arraylike em array

//console.log(titulos); //HTMLCollection
//console.log(titulosArray); //Array

titulosArray.forEach(function(item) {
//  console.log(item);
})

//arrow function
imgs.forEach((item, index, array) => {
//  console.log(item);
//  console.log(index);
//  console.log(array);
})

imgs.forEach(item => { //se a arrow function tiver apenas um argumento, o parênteses não é necessário
//  console.log(item);
})

let i = 0;
imgs.forEach(() => { //se a arrow function tiver nenhum argumento ou mais de um, o parênteses é obrigatório
//  console.log(i++);
})

//imgs.forEach(item => console.log(item)) //se o retorno da arrow funtion for de apenas uma linha, a chave não é necessária
