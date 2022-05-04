// 60. Programa para gerar uma nova string sem o primeiro e último caractere da string inicial.
function removerCaractere(string) {
  console.log(string.substring(1, string.length - 1));
}
removerCaractere("feijão");
removerCaractere("arroz");
