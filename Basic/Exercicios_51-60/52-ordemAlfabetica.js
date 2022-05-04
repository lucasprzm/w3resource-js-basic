// 52. Programa para colocar as letras de uma string em ordem alfabética.
function ordemAlfabetica(string) {
  console.log(string.toLowerCase().split("").sort().join(""));
}
ordemAlfabetica("Lucas");
