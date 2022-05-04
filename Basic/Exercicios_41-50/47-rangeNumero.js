//47. Dado um range selecionado pelo usuário, verifica se um número está dentro do range fornecido.
function rangeNumero(r1, r2, x) {
  console.log(x >= r1 && x <= r2);
}
rangeNumero(10, 20, 15);
rangeNumero(150, 2000, 2500);
rangeNumero(40, 1000, 500);
