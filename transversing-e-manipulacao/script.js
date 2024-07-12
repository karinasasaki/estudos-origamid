// Duplique o menu e adicione ele em copy
const menu = document.querySelector(".menu");
const menuClone = menu.cloneNode(true);
const copy = document.querySelector(".copy");
copy.appendChild(menuClone);

// Selecione o primeiro DT da dl de Faq
const faqLista = document.querySelector(".faq-lista");
const primeiroDT =  faqLista.children[0];
console.log(primeiroDT);

// Selecione o DD referente ao primeiro DT
const proximoDD = primeiroDT.nextElementSibling;
console.log(proximoDD);

// Substitua o conteúdo html de .faq pelo de .animais
const faq = document.querySelector(".faq");
const animais = document.querySelector(".animais");
faq.innerHTML = animais.innerHTML;