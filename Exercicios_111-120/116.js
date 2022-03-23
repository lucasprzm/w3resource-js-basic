// 116. Função para encontrar os divisores de 3 substituindo o caractere # por números de 1 a 9.
function hashString(string) {
  let novaString = "";
  let arrayResultados = [];
  if (string.includes("#")) {
    string.indexOf("#");
    for (let i = 0; i <= 9; i++) {
      novaString = string.replace("#", i);
      if (novaString % 3 == 0) {
        arrayResultados.push(novaString);
      }
    }
    console.log(arrayResultados);
  } else {
    console.log("A string não tem o caractere #!");
  }
}
hashString("2#0");
hashString("32#");
hashString("4#2");
