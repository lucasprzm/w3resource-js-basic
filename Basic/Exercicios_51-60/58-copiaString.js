//58. Programa para repetir os 3 últimos caracteres de uma string.
function copiaString(string) {
  if (string.length >= 3) {
    console.log(string.substring(string.length - 3).repeat(4));
  } else {
    console.log("String tem menos do que 3 caracteres.");
  }
}
copiaString("arroz");
copiaString("feijão");
