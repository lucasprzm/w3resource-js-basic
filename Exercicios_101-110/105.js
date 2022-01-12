// 105. Função para somar os dígitos de um número até que o número tenha somente um dígito, mostrando o número de conversões feitas.
function somaDigitos(numero) {
  let conversao = 0;
  let soma =
    Math.floor(numero / 100) +
    Math.floor((numero - Math.floor(numero / 100) * 100) / 10) +
    Math.floor(
      numero -
        Math.floor(numero / 100) * 100 -
        Math.floor((numero - Math.floor(numero / 100) * 100) / 10) * 10
    );
  if (soma >= 10 && soma <= 99) {
    conversao = 2;
  } else if (soma < 10) {
    conversao = 1;
  }
  console.log(conversao);
}
somaDigitos(123);
somaDigitos(156);
somaDigitos(498);
