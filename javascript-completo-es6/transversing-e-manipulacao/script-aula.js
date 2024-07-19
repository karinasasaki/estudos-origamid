const h1 = document.querySelector("h1");
const animaisLista = document.querySelector(".animais-lista");
const animaisDescricao = document.querySelector(".animais-descricao");

//innerHTML mostra o que está dentro do elemento
/* console.log(h1.innerHTML); //Esse elemento só tem o texto
console.log(animaisLista.innerHTML); //Tem os itens da lista (fotos dos animais) */

//innerText mostra apenas o texto que está dentro do elemento
/* console.log(h1.innerText); //Mostra o texto dentro do elemento
console.log(animaisLista.innerText); //Essa lista não possui texto
console.log(animaisDescricao.innerText); //Retorna todo o texto que a lista possui */

/* h1.innerHTML = "<p>Novo título</p>"; //Substitui tudo o que tinha dentro da h1 pelo novo valor
h1.outerHTML = "<p>Novo título 2</p>"; //Substitui inclusive o próprio elemento h1 */

//Transversing - navegar pelo DOM utilizando suas propriedades e métodos
/* console.log(animaisLista.parentElement); //Pai
console.log(animaisLista.parentElement.parentElement); //Pai do pai
console.log(animaisLista.nextElementSibling); //Elemento abaixo, do mesmo pai
console.log(animaisLista.previousElementSibling); //Elemento acima, do mesmo pai */

/* console.log(animaisDescricao.children); //Retorna uma HTMLCollection com os filhos
console.log(animaisDescricao.children[0]); //Retorna primeiro filho
console.log(animaisDescricao.children[--animaisLista.children.length]); //Retorna último filho */

//Outras formas de selecionar os filhos
/* console.log(animaisDescricao.querySelectorAll("section"));
console.log(animaisDescricao.querySelectorAll("section:last-child")); */

//Nodes
/* console.log(animaisLista.childNodes); //Retorna filhos, incluindo quebra de linha, comentários, se houver
console.log(animaisLista.previousSibling); //Retorna o node anterior, do mesmo pai
console.log(animaisLista.firstChild); //Retorna primeiro node filho */

const contato = document.querySelector(".contato");
const tituloContato = contato.querySelector(".titulo");
const mapa = document.querySelector(".mapa");

//Manipulando elementos
/* animaisDescricao.append(tituloContato); //Essa função move o elemento selecionado e torna filho
contato.insertBefore(h1, tituloContato); //h1 é o elemento a ser movido antes de tituloContato, que deve ser filho de contato.
//h1 foi movido antes do título contato, que é filho de contato
contato.removeChild(tituloContato); //Remove elemento filho selecionado
contato.replaceChild(mapa, tituloContato); //Substitui titulo pelo mapa */

//Criando elementos
const novoh1 = document.createElement("h1"); //Cria um elemento h1
/* novoh1.innerText = "Título novo"; //Insere texto no elemento
novoh1.classList.add("titulo"); //Insere classe no elemento
console.log(novoh1);
mapa.appendChild(novoh1); //Move o elemento depois do primeiro filho de mapa */

//Clonando elementos
const faq = document.querySelector(".faq");
const cloneh1 = h1.cloneNode(true); //o valor true inclui os filhos do elemento ao clonar
/* faq.appendChild(cloneh1); //Moveu apenas o elemento clonado, o elemento original permanece */