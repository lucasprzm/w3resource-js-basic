// 109. Função que a partir de um número gera todos os números primos abaixo dele em um array de números.
function primo(numero) {
  let arrayPrimos = [];
  let primo = false;
  for (let i = 2; i <= numero; i++) {
    for (let j = 2; j <= i; j++) {
      if (j != i && i % j == 0) {
        primo = false;
        break;
      } else {
        primo = true;
      }
    }
    if (primo) {
      arrayPrimos.push(i);
    }
  }
  console.log(arrayPrimos);
}
primo(37);
primo(45);
primo(99);
