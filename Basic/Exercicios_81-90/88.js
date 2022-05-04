// 88. Função que verifica se dois números são similares a partir de um divisor,
// se os dois números forem divisíveis pelo mesmo divisor ou se nenhum dos dois for divisível pelo divisor, são similares.
function numerosSimilares(x, y, divisor) {
  console.log(
    (x % divisor == 0 && y % divisor == 0) ||
      (x % divisor != 0 && y % divisor != 0)
  );
}
numerosSimilares(20, 25, 5);
numerosSimilares(20, 25, 7);
numerosSimilares(10, 20, 4);
