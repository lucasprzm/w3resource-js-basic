// 59. Programa que extrai a primeira metade de uma string com número de caracteres par.
function metadeStringPar(string) {
  if (string.length % 2 == 0) {
    console.log(string.substring(0, string.length - string.length / 2));
  } else {
    console.log("A string não pode ser divida, pois ela é ímpar!");
  }
}
metadeStringPar("joão");
metadeStringPar("rafael");
metadeStringPar("rafaelas");
metadeStringPar("oi");
metadeStringPar("lucas");
