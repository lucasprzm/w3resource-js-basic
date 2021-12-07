// 9. Programa para determinar quantos dias faltam para o próximo Natal.
// O ano pode ser alterado de acordo com a função, utilizei o ano como variável.

function natal(ano) {
  let data = new Date(ano, 11, 25);
  let hoje = new Date();
  let tempoRestante = Math.ceil((data - hoje) / 86400000);
  console.log(tempoRestante);
}
natal(2021);

// Criei uma função alternativa que utiliza o método hoje.getFullYear() retornando o ano atual
// para tornar dinâmico automaticamente.
// Ao pegar para o ano atual poderia dar problema entre os dias 26 e 31 de dezembro.

function natalDois() {
  let hoje = new Date();
  let data = new Date(hoje.getFullYear(), 11, 25);
  if (data - hoje < 0) {
    data = new Date(hoje.getFullYear() + 1, 11, 25);
  }
  let tempoRestante = Math.ceil((data - hoje) / 86400000);
  console.log(
    `Faltam ${tempoRestante} dia(s) para o Natal de ${hoje.getFullYear()}.`
  );
}
natalDois();
