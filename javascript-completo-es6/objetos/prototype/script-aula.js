//Toda função tem o método prototype que retorna um objeto com o método constructor
function Pessoa(nome, idade) {
  this.nome = nome;
  this.idade = idade;
}

const karina = new Pessoa("Karina", 24);

console.log(Pessoa.prototype);
console.log(karina.prototype); //retorna undefined porque karina é objeto e não função

Pessoa.prototype.andar = function() {
  return this.nome + " andou";
}

//Todo objeto instanciado herda os métodos e propriedades do protótipo do construtor