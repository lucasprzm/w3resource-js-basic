// 67. Função que verifica se tem a letra P no início ou no fim da string, se tiver, retira o primeiro e último caracteres da string. Caso não tenha, retorna a string normalmente.
function removeP(string) {
  if (
    (string.indexOf("P") == 0 && string.indexOf("P") == string.length - 1) ||
    (string.indexOf("p") == 0 && string.indexOf("p") == string.length - 1) ||
    (string.indexOf("P") == 0 && string.indexOf("p") == string.length - 1) ||
    (string.indexOf("p") == 0 && string.indexOf("P") == string.length - 1)
  ) {
    console.log(string.substring(1, string.length - 1));
  } else if (string.indexOf("P") == 0 || string.indexOf("p") == 0) {
    console.log(string.substring(1));
  } else if (
    string.indexOf("P") == string.length - 1 ||
    string.indexOf("p") == string.length - 1
  ) {
    console.log(string.substring(0, string.length - 1));
  } else {
    console.log(string);
  }
}
removeP("Python");
removeP("eduardo");
removeP("Pedro");
removeP("pedro");
removeP("eduardop");
