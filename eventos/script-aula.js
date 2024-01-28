//addEventListener
const img = document.querySelector("img");

img.addEventListener("click", () => {
//  console.log("Clicou");
})

const animaisLista = document.querySelector(".animais-lista");

function callback(event) {
//  console.log(event.currentTarget);//mesmo que this, elemento selecionado
//  console.log(event.target);//onde foi acionado o evento
//  console.log(event.type);//nome/tipo do evento
//  console.log(event.path);
}

animaisLista.addEventListener("click", callback); //função callback separado é uma boa prática, porque a função anonima não tem nome

//preventDefault
const linkExterno = document.querySelector("a[href^='http']");

function handleLinkExterno(event) {
  event.preventDefault(); //evita o comportamento padrão do evento
//  console.log("Prevenindo");
}

linkExterno.addEventListener("click", handleLinkExterno);

//this
function mostraThis(event) {
//  console.log(this); //próprio elemento
//  console.log(event.currentTarget);
}

linkExterno.addEventListener("click", mostraThis);

//events
const h1 = document.querySelector("h1");

function handleEvent(event) {
//  console.log(event.type, event);
}

window.addEventListener("scroll", handleEvent);
window.addEventListener("resize", handleEvent);
window.addEventListener("keydown ", handleEvent);

//keyboard
function handleKeyboard(event) {
  if(event.key === "f") {
    document.body.classList.toggle('fullscreen');
  }
}

window.addEventListener("keydown", handleKeyboard);