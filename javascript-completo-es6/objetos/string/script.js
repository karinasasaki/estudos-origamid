// Utilizando o foreach na array abaixo,
// some os valores de Taxa e os valores de Recebimento

const transacoes = [
  {
    descricao: 'Taxa do Pão',
    valor: 'R$ 39',
  },
  {
    descricao: 'Taxa do Mercado',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 99',
  },
  {
    descricao: 'Taxa do Banco',
    valor: 'R$ 129',
  },
  {
    descricao: 'Recebimento de Cliente',
    valor: 'R$ 49',
  },
];

let taxa = 0;
let recebimento = 0;

transacoes.forEach((transacao) => {
  const valor = +transacao.valor.replace("R$ ", "");
  if (transacao.descricao.slice(0, 4).toUpperCase() === "TAXA")
    taxa += valor;
  else if (transacao.descricao.slice(0, 11).toUpperCase() === "RECEBIMENTO")
    recebimento += valor;
})

console.log("Taxa total: R$ " + taxa);
console.log("Recebimento total: R$ " + recebimento);

// Retorne uma array com a lista abaixo
const transportes = 'Carro;Avião;Trem;Ônibus;Bicicleta';
console.log(transportes.split(";"));

// Substitua todos os span's por a's
const html = `<ul>
                <li><span>Sobre</span></li>
                <li><span>Produtos</span></li>
                <li><span>Contato</span></li>
              </ul>`;

console.log(html.split("span").join("a"));

// Retorne o último caracter da frase
const frase = 'Melhor do ano!';
console.log(frase.charAt(frase.length - 1));

// Retorne o total de taxas
const transacoesNome = ['Taxa do Banco', '   TAXA DO PÃO', '  taxa do mercado', 'depósito Bancário', 'TARIFA especial'];

let numeroTaxas = 0;
transacoesNome.forEach((transacao) => {
  if (transacao.trim().toUpperCase().includes("TAXA"))
    numeroTaxas ++;
})
console.log("Total de taxas: " + numeroTaxas);