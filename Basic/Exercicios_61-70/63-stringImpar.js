//63. Programa para retirar 3 caracteres do meio de uma string com quantidade de caracteres ímpares.
function stringImpar(string) {
  if (string.length >= 3 && string.length % 2 != 0) {
    console.log(
      string.substring((string.length + 1) / 2 - 2, (string.length + 1) / 2 + 1)
    );
  }
}
stringImpar("aaabbbaaa");
stringImpar("aabbbaa");
stringImpar("aaaabbbaaaa");
