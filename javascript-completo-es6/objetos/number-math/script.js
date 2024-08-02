// Retorne um número aleatório
// entre 1050 e 2000
const min = 1050;
const max = 2000;
const numeroSorteado = Math.floor(Math.random() * (max - min + 1) + min);
console.log(numeroSorteado);

// Retorne o maior número da lista abaixo
const numeros = '4, 5, 20, 8, 9';
const arrayNumeros = numeros.split(", ");
console.log(Math.max(...arrayNumeros));

// Crie uma função para limpar os preços
// e retornar os números com centavos arredondados
// depois retorne a soma total
const listaPrecos = ['R$ 59,99', ' R$ 100,222',
                     'R$ 230  ', 'r$  200'];

function limparPreco(preco) {
  preco = +preco.toUpperCase().replace("R$", "").trim().replace(",", ".");
  preco = +preco.toFixed(2);
  return preco;
}

let precoTotal = 0;
listaPrecos.forEach((preco) => {
  precoTotal += limparPreco(preco);
})
console.log("Preço total: " + precoTotal.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));