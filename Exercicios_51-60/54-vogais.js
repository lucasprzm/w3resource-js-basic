// 54. Programa para verificar quantas vogais existem em uma string.
function vogais(string) {
  let contagemVogais = 0;
  for (let i = 0; i < string.length; i++) {
    switch (string[i]) {
      case "a":
      case "e":
      case "i":
      case "o":
      case "u":
      case "A":
      case "E":
      case "I":
      case "O":
      case "U":
        contagemVogais++;
        break;
      default:
        break;
    }
  }
  console.log(`Temos ${contagemVogais} vogais na string ${string}.`);
}
vogais("Lucas");
vogais("Lara");
vogais("Cruzeiro Esporte Clube");
