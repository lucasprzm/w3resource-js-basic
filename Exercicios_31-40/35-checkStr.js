// 35. Programa para encontrar se certo caractere está nas posições 2 a 4 em dada string.
function checkString(string, caractere) {
  let marcador = 0;
  for (let i = 1; i < 4; i++) {
    if (string.charAt(i) == caractere) {
      marcador++;
      break;
    }
  }
  if (marcador == 1) {
    console.log(true);
  } else {
    console.log(false);
  }
}
checkString("Python", "h");
checkString("Lucas", "p");
checkString("Pedro", "d");
