// 81. Função para somar os dois dígitos de um número que seja positivo e menor que 100.
function somaDigitos(x) {
  if (x >= 0 && x <= 99) {
    let dezena = Math.floor(x / 10);
    let unidade = x % 10;
    console.log(dezena + unidade);
  } else {
    console.log("Número inválido! O número deve ser entre 00 e 99");
  }
}
somaDigitos(35);
somaDigitos(82);
somaDigitos(5);
somaDigitos(110);
