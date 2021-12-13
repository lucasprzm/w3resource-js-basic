// 46. Programa para verificar se dois números são múltiplos de 7 ou 11, caso os dois sejam, retorna falso, caso um deles seja, retorna true.
function seteOnze(x, y) {
  if (x >= 0 && y >= 0) {
    if (
      ((x % 7 == 0 && y % 7 != 0) || (x % 11 == 0 && y % 11 != 0)) &&
      ((x % 7 != 0 && y % 7 == 0) || (x % 11 != 0 && y % 11 == 0))
    ) {
      console.log(false);
    } else if ((x % 7 == 0 && y % 7 != 0) || (x % 11 == 0 && y % 11 != 0)) {
      console.log(true);
    } else if ((x % 7 != 0 && y % 7 == 0) || (x % 11 != 0 && y % 11 == 0)) {
      console.log(true);
    }
  }
}
seteOnze(21, 15);
seteOnze(22, 15);
seteOnze(14, 22);
seteOnze(33, 35);
seteOnze(15, 21);
seteOnze(15, 44);
