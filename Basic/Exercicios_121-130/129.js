// 129. Função que retorna o número primo maior de um dado número.
function primoMaior(num) {
  let divisor = 0;
  for (let j = num + 1; ; j++) {
    for (let i = 1; i <= j; i++) {
      if (j % i == 0) {
        divisor++;
      }
    }
    if (divisor != 2) {
      divisor = 0;
    } else {
      console.log(j);
      return;
    }
  }
}
primoMaior(3);
primoMaior(17);
primoMaior(345);
