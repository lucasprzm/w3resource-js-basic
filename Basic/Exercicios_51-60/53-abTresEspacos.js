//53. Programa para verificar a distância entre as letras a e b em uma string, caso a distância seja de 3 caracteres entre elas, retorna true.
function tresEspacos(string) {
  if (string.indexOf("b") != -1 && string.indexOf("a") != -1) {
    console.log(Math.abs(string.indexOf("b") - string.indexOf("a")) == 4);
  } else {
    console.log("Ou não tem a ou b na string.");
  }
}
tresEspacos("amburana");
tresEspacos("ambulância");
tresEspacos("banana");
tresEspacos("abacaxi");
tresEspacos("arroz");
tresEspacos("bmnmnmnmnmna");
tresEspacos("amnsb");
