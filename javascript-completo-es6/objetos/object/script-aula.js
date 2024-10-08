//Formas de criar um objeto

const pessoa = new Object({
  nome: "Karina",
  idade: 25
})

//console.log(pessoa.nome);

const carro = {
  init(valor) {
    this.marca = valor;
    return this;
  },
  rodas: 4,
  acelerar() {
    return this.marca + " acelerou";
  },
  buzinar() {
    return this.marca + " buzinou";
  }
}

const etios = Object.create(carro).init("Toyota");

//console.log(etios.acelerar());

const funcaoAutomovel = {
  acelerar() {
    return "acelerou";
  },
  buzinar() {
    return "buzinou";
  }
}

const moto = {
  rodas: 2,
  capacete: true
}

Object.assign(moto, funcaoAutomovel);

//console.log(moto.buzinar());

const bicicleta = {};

Object.defineProperties(bicicleta, {
  rodas: {
    value: 2,
    writable: true, //Por padrão é false
    configurable: false, //Por padrão é false
  }
})

bicicleta.rodas = 3; //Muda a propriedade rodas
delete bicicleta.rodas; //Não é possível deletar propriedade rodas

//console.log(bicicleta);

const trem = {
  capacete: false
};

Object.defineProperties(trem, {
  rodas: {
    get() {
      return this._rodas;
    },
    set(valor) {
      return this._rodas = valor * 4;
    }
  }
})

//console.log(trem);
//console.log(trem.rodas);
//console.log(trem.rodas = 2);
//console.log(trem.rodas);

//----------------------------------------------------------------

/* console.log(Object.getOwnPropertyDescriptors(Array));
console.log(Object.getOwnPropertyDescriptors(Array.prototype));
console.log(Object.getOwnPropertyDescriptors(trem));
console.log(Object.getOwnPropertyDescriptors(window, "innerHeight"));

console.log(Object.keys(trem));
console.log(Object.values(trem));
console.log(Object.entries(trem));

console.log(Object.getOwnPropertyNames(Array));
console.log(Object.getOwnPropertyNames(Array.prototype)); */

const frutas = ["Banana", "Maçã"];
/* console.log(Object.getPrototypeOf(frutas));
console.log(Array.prototype); */

const aluno1 = {
  ano: 2024,
  matricula: 20240101,
  nome: "Karina"
}

/* aluno1.ano = 2023;
console.log(aluno1);

Object.freeze(aluno1); //Não permite alterações
aluno1.matricula = 20230101;
console.log(aluno1);
console.log(Object.isFrozen(aluno1)); */

const aluno2 = {
  ano: 2020,
  matricula: 20200101,
  nome: "Bruno"
}

/* aluno2.ano = 2010;
aluno2.uniforme = true;
console.log(aluno2);

Object.seal(aluno2); //Não permite novas propriedades nem excluir as existentes
delete aluno2.uniforme
console.log(aluno2);
console.log(Object.isSealed(aluno2)); */


const aluno3 = {
  ano: 2025,
  matricula: 20250101,
  nome: "Carla"
}
/* console.log(aluno3);

Object.preventExtensions(aluno3); //Não permite novas propriedades
aluno3.uniforme = true;
console.log(aluno3);
console.log(Object.isExtensible(aluno3)); */

//---------------------------------------------

/* console.log("".constructor.prototype);
console.log([].constructor.prototype);
console.log(aluno1.constructor.prototype); */

/* console.log(aluno1.hasOwnProperty("map"));
console.log(Array.hasOwnProperty("map"));
console.log(Array.prototype.hasOwnProperty("map")); */

//console.log(Array.prototype.isPrototypeOf(frutas));

const somar = function(a, b) {
  return a + b;
}

const li = document.querySelectorAll("li");

/* console.log(frutas.toString());
console.log(somar.toString());
console.log(aluno1.toString());

console.log(Object.prototype.toString.call(frutas));
console.log(Object.prototype.toString.call(somar));
console.log(Object.prototype.toString.call(aluno1));
console.log(Object.prototype.toString.call(li)); */