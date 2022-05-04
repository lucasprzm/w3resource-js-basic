// 49. Programa para trocar a letra para uma acima no alfabeto ou número.
function trocarLetra(string) {
  let novaString = "";
  for (let i = 0; i < string.length; i++) {
    let element = string.charCodeAt(i);
    novaString += String.fromCharCode(element + 1);
  }
  console.log(novaString);
}
trocarLetra("Lara");
trocarLetra("Lucas");
trocarLetra("W3R");
trocarLetra("php");
