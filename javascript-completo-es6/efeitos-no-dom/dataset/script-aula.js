const div = document.querySelector("[data-cor]"); //seleciona pelo elemento que conter o atributo
div.dataset.height = 100;
div.dataset.totalHeight = 1000; //camel case
delete div.dataset.width;

console.log(div.dataset);
console.log(div.dataset.cor);
console.log(div.dataset.animaScroll); // anima-scroll -> animaScroll camel case