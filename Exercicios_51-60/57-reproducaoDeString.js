// 57. Programa para repetir uma string.
function reproducaoDeString(string, repeticoes) {
  let novaString = "";
  for (let i = 0; i < repeticoes; i++) {
    novaString += string;
  }
  console.log(novaString);
}
reproducaoDeString("abc", 5);
reproducaoDeString("lucas", 3);
