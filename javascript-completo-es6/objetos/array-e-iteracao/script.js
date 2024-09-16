// Selecione cada curso e retorne uma array
// com objetos contendo o título, descricao,
// aulas e horas de cada curso

const cursos = document.querySelectorAll(".curso");
const arrayCursos = Array.from(cursos);
const objCursos = arrayCursos.map((curso) => {
  const titulo = curso.querySelector("h1").innerHTML;
  const descricao = curso.querySelector("p").innerHTML;
  const aulas = curso.querySelector(".aulas").innerHTML;
  const horas = curso.querySelector(".horas").innerHTML;
  return {
    titulo,
    descricao,
    aulas,
    horas
  };
})
console.log(objCursos);


// Retorne uma lista com os
// números maiores que 100
const numeros = [3, 44, 333, 23, 122, 322, 33];
const maiorQue100 = numeros.filter(numero => numero > 100);
console.log(maiorQue100);

// Verifique se Baixo faz parte
// da lista de instrumentos e retorne true
const instrumentos = ['Guitarra', 'Baixo', 'Bateria', 'Teclado']
const instrumentosTemBaixo = instrumentos.some(instrumento => instrumento === "Baixo");
console.log(instrumentosTemBaixo);

// Retorne o valor total das compras
const compras = [
  {
    item: 'Banana',
    preco: 'R$ 4,99'
  },
  {
    item: 'Ovo',
    preco: 'R$ 2,99'
  },
  {
    item: 'Carne',
    preco: 'R$ 25,49'
  },
  {
    item: 'Refrigerante',
    preco: 'R$ 5,35'
  },
  {
    item: 'Quejo',
    preco: 'R$ 10,60'
  }
]

let valorTotal = 0;
const valores = compras.map((compra) => {
  valorTotal += new Number(compra.preco.split(" ")[1].replace(",", "."));
})
console.log(valorTotal);