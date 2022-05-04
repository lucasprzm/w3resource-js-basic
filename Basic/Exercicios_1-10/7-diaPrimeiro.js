// 7. Programa para encontrar quais domingos ocorreram nos dias 01/01 de 2014 a 2050.

function diaPrimeiroDomingo() {
  // Laço de repetição para iterar o ano.
  for (let ano = 2014; ano <= 2050; ano++) {
    // Criação do objeto com o mês e o dia, ano como uma variável, usando o método getDay para pegar o dia da semana que a data em questão foi retirada.
    let data = new Date(ano, 0, 1).getDay();
    // Condição para que seja um domingo.
    if (data == 0) {
      console.log(`Dia 01/01 foi um domingo no ano: ${ano}`);
    }
  }
}
diaPrimeiroDomingo();
