// 68. Função que retira n caracteres do início e do fim de uma string e cria outra com esses caracteres removidos.
function novaString(string, n) {
  console.log(
    string.substring(0, n) + string.substring(string.length - n, string.length)
  );
}
novaString("JavaScript", 2);
novaString("joaozinho", 2);
