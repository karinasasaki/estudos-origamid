// Crie uma função construtora de Pessoas
// Deve conter nome, sobrenome e idade

function Pessoa(nome, sobrenome, idade) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  this.idade = idade;
}

// Crie um método no protótipo que retorne
// o nome completo da pessoa

Pessoa.prototype.nomeCompleto = function() {
  return this.nome + " " + this.sobrenome;
}

const karina = new Pessoa("Karina", "Sasaki", 24);
console.log(karina.nomeCompleto());

// Liste os métodos acessados por 
// dados criados com NodeList,
// HTMLCollection, Document

console.log(Object.getOwnPropertyNames(NodeList.prototype));
console.log(Object.getOwnPropertyNames(HTMLCollection.prototype));
console.log(Object.getOwnPropertyNames(Document.prototype));

// Liste os construtores dos dados abaixo
const li = document.querySelector('li');

li; console.log(li.constructor.name); //HTMLLIElement
li.click; console.log(li.click.constructor.name); //Function
li.innerText; console.log(li.innerText.constructor.name); //String
li.value; console.log(li.value.constructor.name); //Number
li.hidden; console.log(li.hidden.constructor.name); //Boolean
li.offsetLeft; console.log(li.offsetLeft.constructor.name); //Number
li.click(); console.log(li.click()); //undefined

// Qual o construtor do dado abaixo:
li.hidden.constructor.name; //String