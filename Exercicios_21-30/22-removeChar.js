// 22. Programa que retira determinado caractere de uma string pelo seu índice, retornando a string sem o caractere.

function removeChar(string, indiceRemovido) {
  console.log(
    string.substring(0, indiceRemovido) + string.substring(indiceRemovido + 1)
  );
}
removeChar("w3resource", 5);
removeChar("Pedra", 2);
removeChar("Casa", 3);
